from django.http import HttpResponse, JsonResponse
import json
from collections import OrderedDict
from .models import MyData
import keras
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import pandas as pd
import tensorflow as tf


def hello(request):
    return HttpResponse("Hello, World!")


def get_data_view(request):
    if request.method == 'GET':
        # get data form database
        queryset = MyData.objects.all()
        data = list(queryset.values())
        print(data)

        # make data transformations that could be used in the model
        transformed_data = {key: [value] for key, value in data[0].items() if key != 'id'}

        # sort in specific order to correct prediction
        sorted_data = pd.DataFrame({
            'bedrooms': transformed_data['bedrooms'],
            'bathrooms': transformed_data['bathrooms'],
            'sqft_living': transformed_data['sqft_living'],
            'sqft_lot': transformed_data['sqft_lot'],
            'floors': transformed_data['floors'],
            'view': transformed_data['view'],
            'condition': transformed_data['condition'],
            'grade': transformed_data['grade'],
            'yr_built': transformed_data['yr_built']
        })

        # load trained model
        model = keras.models.load_model('PredictModel.h5')
        prediction = model.predict(tf.convert_to_tensor(sorted_data, dtype=tf.float32))

        print(f'Predicted Price: {prediction[0][0]}')

        # delete old data from database
        MyData.objects.all().delete()
        return JsonResponse(json.dumps(int(prediction[0][0])), safe=False)


def post_data_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # save data in database
        MyData.objects.create(**data)
        response_data = {'message': 'POST request received'}
        response = JsonResponse(response_data)
        response['Referrer-Policy'] = 'strict-origin-when-cross-origin'
        return response

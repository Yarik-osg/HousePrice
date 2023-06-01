import React, {useState} from 'react';
import './App.css';
import {Button, Form, Spin} from "antd";
import Fields from "./fields";
import axios from "axios";

const App = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const [price, setPrice] = useState(0)

    const sendData = (values: any) => {
        setLoading(true)
        axios.post("http://127.0.0.1:8000/postData/", values)
            .then(data => {
                console.log("post", data);
                setLoading(false)
            })
            .catch(err => {
                console.log(err, "error");
                setLoading(false)
            })
        getData()
    }
    const getData = () => {
        axios.get("http://127.0.0.1:8000/getData/").then(data => {
            setPrice(data.data)
            setLoading(false);
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })

    }
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    House price predictions
                </p>
            </header>
            <Form form={form}
                  onFinish={sendData}>
                {loading ? <Spin size="large"/> :
                    <>
                        <Fields/>
                        <div>
                            <Button type="primary" htmlType="submit"
                            >
                                Predict your price
                            </Button>
                            <Form.Item className="priceInput" name="price">
                                <span style={{fontSize: 25}}>Price: {price} USD</span>
                            </Form.Item>
                        </div>
                    </>
                }
            </Form>

        </div>
    );
}
export default App;
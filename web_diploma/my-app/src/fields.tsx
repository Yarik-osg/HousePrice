import React from 'react';
import {Form, InputNumber, Tooltip} from "antd";
import './fields.css';
const Fields = () => {
    return (
        <div className="fields">
            <Form.Item name="bedrooms" rules={[{required: true, message: 'Please input number of bedrooms.'}]}
                       label="Number of bedrooms" className="fieldElement">
                <InputNumber className="fieldInput" min="0"/>
            </Form.Item>
            <Form.Item rules={[{required: true, message: 'Please input number of bathrooms.'}]} name="bathrooms"
                       label="Number of bathrooms" className="fieldElement">
                <InputNumber className="fieldInput" min="0"/>
            </Form.Item>
            <Tooltip title="Square footage of the apartments interior living space">
                <Form.Item rules={[{required: true, message: 'Please input square.'}]} name="sqft_living"
                           label="Square footage of the living space"
                           className="fieldElement">
                    <InputNumber className="fieldInput" min="0"/>
                </Form.Item>
            </Tooltip>
            <Tooltip title="Square footage of the land space">
                <Form.Item rules={[{required: true, message: 'Please input square.'}]} name="sqft_lot"
                           label="Square footage of the land space" className="fieldElement">
                    <InputNumber className="fieldInput" min="0"/>
                </Form.Item>
            </Tooltip>
            <Form.Item rules={[{required: true, message: 'Please input number of floors.'}]} name="floors"
                       label="Number of the floors" className="fieldElement">
                <InputNumber className="fieldInput" min="0"/>
            </Form.Item>
            <Tooltip title="An index from 0 to 4 of how good the view of the property was">
                <Form.Item rules={[{required: true, message: 'Please input type of view.'}]} name="view"
                           label="Type of the view" className="fieldElement">
                    <InputNumber className="fieldInput" min="0" max="4"/>
                </Form.Item>
            </Tooltip>
            <Tooltip title="An index from 1 to 7 on the condition of apartment">
                <Form.Item rules={[{required: true, message: 'Please input type of condition.'}]} name="condition"
                           label="Type of the condition" className="fieldElement">
                    <InputNumber className="fieldInput" min="1" max="7"/>
                </Form.Item>
            </Tooltip>
            <Tooltip
                title="An index from 1 to 13 where 1-3 falls short of building construction and design, 7 has an average level, and 11-13 have a high quality. ">
                <Form.Item rules={[{required: true, message: 'Please input type of grade.'}]} name="grade"
                           label="Type of the grade" className="fieldElement">
                    <InputNumber className="fieldInput" min="0" max="13"/>
                </Form.Item>
            </Tooltip>
            <Tooltip title="The year the house was initially built">
                <Form.Item rules={[{required: true, message: 'Please input year of built.'}]} name="yr_built"
                           label="Year of built" className="fieldElement">
                    <InputNumber className="fieldInput" min="0"/>
                </Form.Item>
            </Tooltip>

        </div>
    );
};

export default Fields;
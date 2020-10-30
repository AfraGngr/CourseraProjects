import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    View
} from 'react-native';
import { Card } from "react-native-elements"

const ContactUs = () => {
        return (
            <Card>
                <Card.Title>Contact Us</Card.Title>
                <Card.Divider/>
                    <Text>121, Clear Water Bay Road</Text>
                    <Text>Clear Water Bay, Kowloon</Text>
                    <Text>HONG KONG</Text>
                    <Text>Tel: +852 1234 5678</Text>
                    <Text>Fax: +852 8765 4321</Text>
                    <Text>Email:confusion@food.net</Text>
            </Card>
            );
        };

export default ContactUs;
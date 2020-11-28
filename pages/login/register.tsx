import React from "react";
import { MainLayout } from "../../Layouts/main.layout";

export default class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            users: null,
            isLoaded: true
        }
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value });
    }

    render() {
        return (
            <MainLayout>
                <form>
                    <label htmlFor="fname">Email</label>
                    <input
                        type="text"
                        id="fname"
                        name="email"
                        placeholder="Your name.."
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />

                    <label htmlFor="lname">Email</label>
                    <input
                        type="text"
                        id="lname"
                        name="password"
                        placeholder="Your password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <input type="submit" value="Submit" />
                </form>
                <style jsx>
                    {
                        `
                             input[type=text], select {
                                width: 100%;
                                padding: 12px 20px;
                                margin: 8px 0;
                                display: inline-block;
                                border: 1px solid #ccc;
                                border-radius: 4px;
                                box-sizing: border-box;
                              }
                              
                              input[type=submit] {
                                width: 100%;
                                background-color: darkblue;
                                color: white;
                                padding: 14px 20px;
                                margin: 8px 0;
                                border: none;
                                border-radius: 4px;
                                cursor: pointer;
                                transition:all .3s;
                              }
                              
                              input[type=submit]:hover {
                                background-color: lightblue;
                              }
                              
                              div {
                                border-radius: 5px;
                                background-color: #f2f2f2;
                                padding: 20px;
                              }s
                             `
                    }

                </style>
            </MainLayout>
        )
    }

}
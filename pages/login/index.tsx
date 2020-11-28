import { MainLayout } from "../../Layouts/main.layout";
import Link from 'next/link'

import classes from '../../styles/login.module.css'

export default class Login extends React.Component {

    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            users: null,
            isLoaded: false
        }
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value });
    }

    render() {
        const { isLoaded } = this.state

        if (isLoaded) {
            return <div className={classes.loading}>Loading...</div>
        } else {
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

                        <label htmlFor="lname">password</label>
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
                        <Link href='/register'><a className={classes.register}>Register</a></Link>
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

}
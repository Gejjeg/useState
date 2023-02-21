import React from "react";
import { ClickCounter } from "./ClickCounter";
import { LoginForm } from "./Login";

export class App extends React.Component {
    render() {
        return (
            <div>
                <ClickCounter />
                <LoginForm />
            </div>
        )
    }
}
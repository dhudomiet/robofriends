import React, { Component } from "react";

interface ErrorState { 
    hasError: boolean;
}

interface ErrorProps {
    children: React.ReactNode;
}

class ErrorBundary extends Component<ErrorProps, ErrorState> {
    constructor(props: ErrorProps) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return <h1>Opps. That is not good</h1>
        }

        return this.props.children;
    }
}

export default ErrorBundary;
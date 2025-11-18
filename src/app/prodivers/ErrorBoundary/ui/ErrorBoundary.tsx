import React, { type ErrorInfo, type ReactNode, Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return (
                <Suspense fallback={<Loader />}>
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

export default withTranslation()(ErrorBoundary);

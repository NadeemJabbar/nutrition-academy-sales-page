import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 relative">
                <Image 
                  src="/Logo.png" 
                  alt="Nutrition Academy Logo" 
                  width={80} 
                  height={80} 
                  className="w-auto h-auto" 
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Something Went Wrong
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <div className="flex justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 
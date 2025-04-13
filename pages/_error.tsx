import React from 'react';
import { NextPageContext } from 'next';
import Link from 'next/link';

interface ErrorProps {
  statusCode: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {statusCode ? `${statusCode} Error` : 'An Error Occurred'}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {statusCode
            ? statusCode === 404
              ? 'The page you are looking for could not be found.'
              : `Sorry, something went wrong on our server.`
            : 'Sorry, an error occurred on your browser.'}
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
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 
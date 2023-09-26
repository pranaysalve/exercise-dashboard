# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /

# Copy the Lambda function code into the container
COPY index.js .

# Install any dependencies if needed (e.g., npm install)

# Define the Lambda handler function and runtime command
CMD ["lambda_function.handler"]

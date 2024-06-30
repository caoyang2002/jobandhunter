#!/bin/bash

# Stop Python application
echo "Stopping Python application..."
pkill -f "python app.py"

# Stop npm process
echo "Stopping npm process..."
pkill -f "npm run dev"

echo "All processes stopped."

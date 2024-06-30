cd server
source venv/bin/activate
nohup python app.py > /dev/null 2>&1 &
cd ..
cd frontend
nohup npm run dev > /dev/null 2>&1 &

echo "started whit http://domian_name:5000"

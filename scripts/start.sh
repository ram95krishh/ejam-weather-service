echo "Step #1 - Cloning the repo..."
echo "............................................"
git clone https://github.com/ram95krishh/ejam-weather-service.git
cd ejam-weather-service

echo "Step #2 - Creating .env file..."
echo "............................................"
cp ../env ./.env

echo "Step #3 - Installing necessary dependencies..."
echo "............................................"
npm i

echo "Step #4 - Starting the service on Port 7600..."
echo "............................................"
npm start
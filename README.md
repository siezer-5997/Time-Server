# HTTP JSON API Node.js Time Server

This project is a simple HTTP JSON API server built using Node.js. The server responds to a specific request with the current date and time formatted as a JSON object.

## Project Steps

### Step 1: Install Node.js on Ubuntu

1. **Check Ubuntu Version and Enable Node Repository:**
    ```sh
    lsb_release -a
    ```

2. **Install Node.js and npm:**
    ```sh
    sudo apt-get install -y nodejs
    ```

3. **Check if Node.js and npm Installed Successfully:**
    ```sh
    node --version
    npm --version
    ```

### Step 2: Create the Node.js File to Support the Current Time Request

1. **Create a Directory for the Project: and go to folder**
    ```sh
    mkdir Time_server
    cd Time_server
    ```

2. **Create a js file i.e. `http_json_api_time_server.js` File with the Following Code:**
    ```javascript
    var http = require('http')

    // Function to make an object with year, month, date, hour,
    // minute format and return the object
    function currenttime() {
        const now = new Date();

        // Formatting the date and time
        const dateTime = {
            year: now.getFullYear(),
            month: String(now.getMonth() + 1).padStart(2, '0'),
            date: String(now.getDate()).padStart(2, '0'),
            hour: String(now.getHours()).padStart(2, '0'),
            minute: String(now.getMinutes()).padStart(2, '0')
        };

        return dateTime;
    }

    var server = http.createServer(function (req, res) {
    // req.url = /api/currenttime
    var result

    // match req.url with the string /api/currenttime
    if (/^\/api\/currenttime/.test(req.url))
        result = currenttime()

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result) + '\n\n')
    } else {
        res.writeHead(404)
        res.end('Not Found.\n')
    }
    })
    server.listen(Number(process.argv[2]), () => {
        console.log('Server is running on port 8000');
    });
    ```

### Step 3: Run the Server and Test the Output

1. **On Terminal 1, Run the Server with the following command:**
    ```sh
    node http_json_api_time_server.js 8000
    ```

    This command will start the server and it will listen on port 8000.

2. **On Terminal 2, open a new terminal and Send a Request to the Server and See the Result:**
    ```sh
    curl http://localhost:8000/api/currenttime
    ```
    - curl usage:
    To send a GET request to the server and see the result, “curl” can be used. So, open another terminal, and run the following command to send a GET request. This allows you to simulate a web browser or other HTTP client by making a request to the Node.js server. “Curl” retrieves and displays the JSON output returned by the server directly in your terminal.

    This will retrieve and display the JSON output returned by the server directly in your terminal. The output should look like this:
    ```json
    {"year":2024,"month":"06","date":"05","hour":"08","minute":"06"}
    ```

## Get Started
1. Clone the repository from github:
    ```sh
    git clone https://github.com/siezer-5997/Time-Server.git
    ```
2. Open the folder in a text editor i.e. VS Code. Go into the cloned folder:
    ```sh
    cd Time-Server
    ```
3. Run the command
    ```sh
    node http_json_api_time_server.js 8000
    ```
4. To test the server, 
    - Option 1: On the client browser, go to the following URL:
        ```sh
        http://localhost:8000/api/currenttime 
        ```
    - Option 2: On a new terminal, run the command:
        ```sh
        curl http://localhost:8000/api/currenttime
        ```

This project guide and README file should help you set up your Node.js server, test it, and get the JSON output effectively.

### Detailed Google Slide Presentation
[Time Server](https://docs.google.com/presentation/d/189WU8vxrv0jBaXArIMFo6JBduwAjP9nNHBe1uiAHBt0/edit?usp=sharing)
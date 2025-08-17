# Project Setup

## Backend (Django) Setup

1. Navigate to the backend directory:  
   `cd backend`

2. Create a virtual environment (this will create an `env` folder inside `backend/`):  
   `python -m venv env`

3. Activate the virtual environment:  
   - On Windows (PowerShell): `.\\env\\Scripts\\Activate.ps1`  
   - On Windows (cmd): `.\\env\\Scripts\\activate.bat`  
   - On macOS/Linux: `source env/bin/activate`

4. Install dependencies:  
   `pip install -r requirements.txt`

5. Run migrations:  
   `python manage.py migrate`

6. Run the server:  
   `python manage.py runserver`

7. Deactivate the virtual environment when done:  
   `deactivate`

---

## Frontend (React) Setup

1. Navigate to the frontend directory:  
   `cd frontend`

2. Install dependencies:  
   `npm install`

3. Start the development server:  
   `npm start`
   or
   'npm run dev'

---

## Notes

- The backend virtual environment (`env/`) should **not** be committed to Git.  
- Make sure your backend server is running before interacting with the frontend.  
- To regenerate the virtual environment if needed:  
  1. Delete the `env/` folder  
  2. Repeat the backend setup steps above

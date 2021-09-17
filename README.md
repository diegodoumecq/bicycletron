# Bicycletron

A SPA about showing bikes and their brands, with a React frontend and a Django backend

## Frontend instructions

Please refer to the `frontend/README.md` file

## Backend instructions

Setup your python and django env & just do `python manage.py runserver` to run the server at `localhost:8000`

## Backend URLS

This Django project exposes:

### `/admin`

The classic Django admin

### `/api/brands`

Exposes `GET` & `POST` methods, the latter of which also accepts a list of brands

### `/api/bicycles`

Exposes `GET` & `POST` methods, the latter of which also accepts a list of bicycles
The `GET` also accepts `brand` as a query parameter to filter bicycles by brand id

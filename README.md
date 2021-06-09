# Propety Viewer

This assignment is developed with ReactJS, Redux, Material UI and other libraries such as react-hook-form, react-table and so on.

# Webapp Link
https://property-viewer.netlify.app/

## Project Screen Shot(s)

![Main page](https://i.postimg.cc/7Zn5M4Yd/Screenshot-2021-06-10-at-0-14-50.png)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

## WebApp structure

![App structure](https://i.postimg.cc/wjzjfr1N/Screenshot-2021-06-10-at-0-43-01.png)

- App
    - PropertyTitle
        - Title
        - Add New Button
    - PropertyList
        - PropertyTable
            - PropertyHeader
            - PropertyRow
                - TableCell
                - ActionButtons
                - DisplayMap

A custom hook useDialog is also used to show dialog with form inside for create or edit form data or show message to make sure user delete right item.
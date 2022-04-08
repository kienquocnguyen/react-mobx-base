<p align="center">
<a href="https://designrevision.com/downloads/shards-dashboard-lite-react/">
<img src="assets/preview.png" width="250" />
</a>
</p>

<h1 align="center" style="border-bottom: none !important; margin-bottom: 5px !important;"><a href="https://designrevision.com/downloads/shards-dashboard-lite-react/">Shards Dashboard React</a></h1>
<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" />
  </a>
  <a href="https://twitter.com/designrevision">
    <img src="https://img.shields.io/twitter/follow/DesignRevision.svg?style=social&label=Follow" />
  </a>
</p>

<p align="center">
A free React admin dashboard template pack featuring a modern design system <br />  and lots of custom templates and components.
</p>

<p align="center">
  <a href="https://designrevision.com/demo/shards-dashboard-lite-react">
    <img height="55px" src="assets/btn-live-preview.png" />
  </a>
  <a href="https://designrevision.com/downloads/shards-dashboard-lite-react">
    <img height="55px" src="assets/btn-learn-more.png" />
  </a>
</p>

<br />

<p align="center">
<a href="https://designrevision.com/downloads/shards-dashboard-lite-react">
<img src="assets/demo-preview.gif" width="650" />
</a>
</p>

<br />

> ✨ **Note:** You can download the Sketch files from the official product page.

<br />

### Quick Start

* Install dependencies by running `yarn` or `npm install`.
* Run `yarn start` or `npm run start` to start the local development server.
* 😎 **That's it!** You're ready to start building awesome dashboards.

<br />

### Project Structure

- This project is bootstrapped using [Create React App](https://github.com/facebook/create-react-app).
- **Flux** is used for state management and all Flux specific files are located inside `src/flux`. Transitioning to a more robust solution such as Redux is also fairly simple.
- All primary templates are located inside `src/views`.
- There is only one single layout defined (Default) inside `src/layouts`, however, the current structure provides an easy way of extending the UI kit. 
- The `src/components` directory hosts all template-specific subcomponents in their own subdirectory.
- The layout styles inherited from Shards Dashboard are pulled in from the `src/shards-dashboard` submodule inside `src/App.js`.
- Other extra styles specific to the libraries used are located inside `src/assets`.
- The `src/utils` directory contains generic Chart.js utilities.

<br />

### Available Scripts

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


<br />

## 🌟 Reactout Project.

### About Us 
- Reachout is a platform for finding language events and support organizer to building their own communities. People use Reachout to exlpore variety events and pursue  their passions in learning languages together. Moreover Reachout help providing a basis supporting for organizers in hosting and managed their events much more easier.

### User Functions
#### Project is divided into three part with 3 main user (admin, lgclubadmin, participants).
- admin is the owner of this Rechout project (Reachout team members).
- lgclubadmin is the owner of a language club (english club, chinese club,...).
- participants is the user who finding clubs, communities, events relative to learning and sharing languages.

#### Each of users have difirent functions.
##### admin
- Can managed, set approvals for language club which signup to become a part on Reachout platform.
- Can create a event and if that event is not relative to language club such as music events, english center course,... . The organizers have to pay a certain cost for admin.
##### lgclubadmin (language club owner)
- Can signup their club, communities on Reachout platform and wait from 2 - 7 days for the admin to decide they can be a part of the platform or not.
- Can post events relative to their club.
- Can have the participants information, control how many participants attend, sales ticket on the platform.
- Can help participants to checkin, checkout event more easier.
##### participants
- Can find all of language learning events on this platform, participate in a event they will have their own calendar on the platform to control their timeline to attend events more easier.
- Can comment, like to help language club improve their quality.
- Can checkin, checkout a event more easier.

### Project Structure
- This project building base on Reactjs ([Mobx](https://mobx.js.org/README.html)).
- The project is divided into 2 main structure: Component (html, life circle handle), Mobx Store.
#### In project we seperated into three main folders (admin, lgclubadmin, participants).
- Each folder contain all of UI, functions for a specific type of user. 
<p align="center">
  <img src="https://trello-attachments.s3.amazonaws.com/5f100a74ac361c5f3bce06d1/5f100a873b008f08e81a88d2/82cd9d2c8b78f50fc1a253bbce949d3d/Untitled2.png" width="500" />
</p>

#### A folder structure
- "views" contain all of the page of that user have.
- "components" contain all of custom components that the developer build for that user.
- "data" contain the navigation value.
- "layout" contain the default layout for every page of that user have.
<p align="center">
  <img src="https://trello-attachments.s3.amazonaws.com/5f100a74ac361c5f3bce06d1/5f100a873b008f08e81a88d2/82cd9d2c8b78f50fc1a253bbce949d3d/Untitled2.png" width="500" />
</p>

#### route.js
- import other page from "views" folder then set their "layout" and path to visit that page.

#### Mobx Store.
##### api
- "base API" contain a basic api handle for orther function can use.
<p align="center">
  <img src="https://trello-attachments.s3.amazonaws.com/5f100a74ac361c5f3bce06d1/5f100a873b008f08e81a88d2/df16a149c776bf627db23decad40da70/Untitled3.png" width="500" />
</p>

- "index" pass the value which "base API" need to handle to response.

<p align="center">
  <img src="https://trello-attachments.s3.amazonaws.com/5f100a74ac361c5f3bce06d1/5f100a873b008f08e81a88d2/803500a73d665d63f53a258c33edfe43/Untitled4.png" width="500" />
</p>

##### Store (UserStore, ClubStore,...)
- A "Store" include two main features (observable, action)
- "observable" understanding like a global varibale can be call and set value in orther components.
- "action" understanding like a global function can be use to set value for "observable" and handle API. "action" help easier controll your code for complex function.
<p align="center">
  <img src="https://trello-attachments.s3.amazonaws.com/5f100a74ac361c5f3bce06d1/5f100a873b008f08e81a88d2/e9037b7ab44541b7c545b8617c363c9a/Untitled5.png" width="500" />
</p>


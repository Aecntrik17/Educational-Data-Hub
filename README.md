# Education Data Stream (EDS)

Deployed app: https://fellow-syllabus-project.herokuapp.com/ <br>
GitHub repo: https://github.com/Aecntrik17/Fellow_Syllabus_Project

## Description

FSP is a web application, built with React, that has three distinct users.

1. Researchers: A user who has compiled raw data regarding a specific subject referred to in this platfor as Articles.
2. Editors: specialists hired by the Client to curate the articles submitted by researchers into lesson plans.
3. Educators: anyone looking for content to enhance their lesson plans for using in their classrooms.

See "Usage" for more details.

---

## Table of Contents

- [Usage](#usage)
- [Future Development](#future-development)
- [License](#license)
- [Developers](#developers)
- [Questions](#questions)

---

## Usage

The three user types interact differently with EDS. Each user has directions on the screen. Users will be able to signup and then login according to their status.
![image](https://user-images.githubusercontent.com/64560630/101778748-445dda80-3ac2-11eb-8bf4-ada65d4b9f3f.png)

From the home page, after logging in users can choose the respective page by clinking the link in navbar to begin working.
![image](https://user-images.githubusercontent.com/64560630/101778891-7f600e00-3ac2-11eb-8ffe-d2a615c1a1d3.png)

1.  Reseachers first submit the name of their article, their own name & an abstract of their research.
    ![image](https://user-images.githubusercontent.com/64560630/101779059-c2ba7c80-3ac2-11eb-919b-42802a75bfea.png)
    Once the article information is submitted, the "Article Information" box is replaced with a file upload box. The researcher then submits their article as a PDF (other file types are also accepted) using the drag-and-drop file uploader, or by clicking if they prefer to select their file from a file tree. Users will be alerted of successful submittions.
    ![image](https://user-images.githubusercontent.com/64560630/101779418-3fe5f180-3ac3-11eb-9401-bb9dd3e59467.png)

2.  Editors will be able to review articles as they are presented in the queue chronically according to when they were created, first in first out. The title, author, absstract and files will be available for download.
    ![image](https://user-images.githubusercontent.com/64560630/101779611-7cb1e880-3ac3-11eb-927e-132dacd9a34c.png)
    Once the Editor downloads the article file the Editor will curate a lesson plan and submit it through the drag and drop feature. Editors are asked to indicate which grade level the lesson plan is most approproate for.
    ![image](https://user-images.githubusercontent.com/64560630/101779847-c39fde00-3ac3-11eb-90db-02a69cc462a5.png)
    Users will provided an alert when submission have been successful.
    ![image](https://user-images.githubusercontent.com/64560630/101780091-124d7800-3ac4-11eb-90ec-6c34ef06f0f4.png)

3.  Educators can filter for lesson plans by batched grade number "K-5", "6-8", and "9-12".
    ![image](https://user-images.githubusercontent.com/64560630/101781295-9e13d400-3ac5-11eb-8c18-b15df79da4ea.png)

Lesson plan previews are available by clicking on "view details" which will also allow the user to download the corresponding lesson Plan file.
![image](https://user-images.githubusercontent.com/64560630/101781385-bf74c000-3ac5-11eb-8c5e-d73c1e0468b9.png)
Educators can also leave a review of the lesson plan in a comments section so that other users may benefit from their feedback.
![image](https://user-images.githubusercontent.com/64560630/101781497-e16e4280-3ac5-11eb-8ea3-e440dd906ea9.png)

## Future Development

- Improve lesson plan searchability for educators, allowing them to search for specific subjects, keywords, etc.
- Integrate a cloud based file storage plaform

## License

No license: When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), “nobody” starts including you.

## Developers

PFS has a great team!

- <b>Lisa Ellison</b> designed the page & carried out layout & styling throughout, and helped identify the concept. <br> Github profile: <https://github.com/lisaellison> <br> Email: <lisaellison9@gmail.com>

- <b>Aaron D. Sims</b> provided the idea. Creating the comments box, front- & back-end, for the educators' reviews was his corner of the project. He contributed to other parts of the project as well. <br>Github profile: <https://github.com/Aecntrik17> <br>Email: <aaron@adsimsllc.com>

- <b>Paul Sloderbeck</b> created the drag-and-drop feature for the researcher file upload & worked mostly on back-end development, with front-end contributions. <br>Github profile: <https://github.com/paulsloderbeck> <br>Email: <paul.sloderbeck@gmail.com>

- <b>Garrett Stein-Seroussi</b> created the grade-range selector. He created much of the front-end work, along with the back-end of the educator and editor pages. <br>Github profile: <https://github.com/gsteinseroussi> <br>Email: <gsteinseroussi@gmail.com>

## Questions

Reach out to any of the team members with questions. See emails above.

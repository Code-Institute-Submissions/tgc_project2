# Covid-19

### Data Centric Development Project - Code Institute

By: Alexia Hsu

## Demo

Live demo of webpage [here](https://share.getcloudapp.com/KouqozOG).


## Aim

Singapore has gone into Circuit Breaker (i.e. Country lockdown) because of covid19, just as many other countries did. Amidst the disruptions in our own life, we also have to struggle to filter out fake news or switch between many sources to have a glimpse of what is happening elsewhere.

This webpage seeks to pool together the data relevant to our homeland and to the world around us. Likewise, having interactivity with data allows for users to easily understand the situation from a bird's eye view.

## UX

Due to the large volume of data and interactivity, this project was designed with a desktop-first approach, utilising mostly 80% of the screen with a seamless scroll. It is in my intention to maintain a clean and simple-to-use experience for users.

Colors were specific to Singapore's national flag - red. However, as bright red may be uncomfortable to the eyes, I've darkened the red to maroon such that it is viewer-friendly and not to alarming. Nonetheless, the maroon and white block are intended and reflective of our national flag. 

Maroon blocks are mainly for activity-based sections (i.e. charts, articles) while white blocks are mainly for information (i.e. summary stats, preventive measures)

The hover links are meant to be neutral (hover: dark grey turns black) to not attract too much attention, since the main interactivity lies in the divisions itself.

In order to retain user attention, all information are centralised and mainly on a scroll-down basis. This wide-view also allows for capturing of charts and maps.

## UI

The navigation bar is responsive across small, medium and large screens adding. As the page is meant for scrolling, the navigation bar design has been kept simple by manually-written css code (no use of bootstrap). When the screen is reduced to 600px and below, the navigation bar becomes a drop-down menu but retains its click-and-auto-scroll function. Smooth scrolling effect has been coded in to enhance the ease of maneuvering through down the webpage.

Roboto [fonts](https://fonts.google.com/?selection.family=Roboto|Rubik&query=rub) was chosen for this website because of it is inviting to users, and since most people use chrome - Roboto would be a familiar font to them.

The [landing](https://alexiahsu.github.io/tgc_project2/) page was designed to be sleek and straightforward to use. The first banner that appears seeks to remind users that this covid-19 is a fight that we are having together - it's a battle in our homeground and also a unity with other countries against this invisible enemy. The image was carefully picked because it gives the intended message "save lives".

The [next segment](https://alexiahsu.github.io/tgc_project2/#welcome) immediately presents my objectives of designing the webpage - to be the single source of truth for any users, especially from Singapore. Following which, the next part contrasts our situation against the globe - which can be interpreted differently: 1) we are doing OK or 2) our numbers are contributing to the covid19 cases. Regardless, it serves as a 'shocking factor' for users to captivate their attention.

Next [here](https://alexiahsu.github.io/tgc_project2/#interactive) brings users to the most exciting part - where they can easily decipher covid-19 related data with the bar chart breakdown of the statuses and the ratio of recovery. Both of which have labels and data if the mouse hovers over the charts. After which, the map serves as an point of interaction - where users can simply hover over the country of interest to see the total number of cases. Likewise, users can choose to scroll through the table list of countries and covid-19 data, search by country name, or skip this part simply by clicking on 'collapse all'. On this note, it is my deliberate intention to .show() the table so that users can't simply skip this, but can still choose to opt out if needed.

After reading through the data, the users are then [educated](https://alexiahsu.github.io/tgc_project2/#prevent) how they can do their part to battle this virus. They can either be wary of the symptoms, to help themselves or others, and also prevent it by Singapore's recommended social distancing measures.

Lastly, amidst all the statistics and information, users are presented with 3 most recently published [articles](https://alexiahsu.github.io/tgc_project2/#articles) which are segmented into local and global news. This allows users to stay aware both locally and as a global citizen.

## Wireframes

Wireframes were created to help me visualise the website in different sized screens. They can be viewed via this [link](https://github.com/Paddlepop25/trent-project-2-dengue/tree/master/assets/wireframes).

## User Stories

These are the user stories that I intended to achieve while building this website:

1. To build a modern looking website that is easy for the user to navigate around
2. To provide basic, accurate and important information on dengue. This includes on what it is, what symptoms does one have from dengue fever and how to prevent mosquito breeding
3. To show users where the dengue clusters in Singapore are with added information in each info-window
4. To provide users information on nearby amenities for those who need medical supplies or relevant useful services
5. To direct users to other websites for further reading. This includes a doctor's interview, the Ministry of Health's official website and others
6. To add an element of fun and surprise in the form of clickable moving mosquitos (on mouse-over on large devices) turning into a splat of red blood
7. To showcase my current skills utilizing HTML5, CSS3, Bootstrap, Javascript, Google Places API and other tools to make a website inspired by an unfortunate incident 2 Christmases ago

## Features

- The links in the navigation bar changes to the theme maroon color (#af0000) when hovered over to indicate that it is a link that the user could click on. This brings them to different sections of the website
- I introduced a smooth scrolling effect so the transition to another section of the website is not abrupt
- When hovering over any links, the cursor changes from a pointer to a hand to indicate that it is not a static word. An action could be made on the link to give the user more information on another page
- I grouped the different aspects of information about dengue in different boxes. For further reading, links in the theme maroon color is provided so the user can click on them easily
- In the dengue clusters section, buttons reflecting the different zones in Singapore are provided. When the user clicks on one of them, the google map is updated with boxes or polygrams to reflect the dengue clusters in that area. This is useful to select an area where the user resides. I didn't include the mouse-over feature for larger screens like the one in the amenities section because the boxes and polygrams are so near each other, a clickable function gives the user a better experience
- The clusters' boxes and polygons shown on the google map are clickable and they show extra detailed information in the form of an info-window
- In the amenities section, suggested places and services are highlighted in the maroon theme color to suggest they are clickable links. Once an option is selected, the google map is updated with up to 20 results. This is reflected with drop down markers with alphabets on them. They are clickable for small and medium devices and upon mouse-over for larger devices, an info-window of each location, address and rating would pop up.
- A list is also shown below the amenity box and the "#" alphabetical index on the list matches the alphabets on the google markers
- I included a fun surprise on this website. There are 2 seemingly random mosquitos placed deliberately over the white background in order to make them stand out. On large screens, when the mouse cursor is over the mosquitos, they buzz a little with the cursor changing to the same pointer as over a link. Once clicked, the mosquitos change into a splat of red blood.
- The footer section has another mosquito and when the user mouse-over over it, the mosquito buzzes and it looks like the female Aedes aegypti mosquito with the white and black striped legs. Upon clicking, users are brought to the Ministry Of Health website for more information on dengue

Future features

- When a relevant API by the NEA (National Environment Agency) is available, I would like the number of dengue cases on this website to be updated daily
- I would like to include testimonies in the form of a video by two or three former dengue patients
- In future development I would like to use a google geolocation API that can locate where the user is in Singapore and return the places near his/her location
- I would like to have one mosquito 'fly away' out of the screen and the mouse cursor change into a fly swatter upon hovering on the mosquito icon

## Technologies Used

Here are a list of programming languages, frameworks, technologies and tools used for this website.

- HTML5
- CSS3
- JavaScript
- JQuery
- [Google Maps API](https://cloud.google.com/maps-platform/)
  - Used places to select locations and the data layers to display information from geoJSON files
- [Place Types](https://developers.google.com/places/supported_types) page
  - Used for selecting places for query
- Markdown in [Google Colaboratory](https://research.google.com/colaboratory/faq.html)
  - Used for writing this README.md file
- [Visual Studio Code](https://code.visualstudio.com/)
  - Used as the IDE to write the codes for this website
- [Bootstrap 4.4.0 framework](https://getbootstrap.com/)
  - Used for it's grid system, page layout with styling and responsive navigation bar.
- [Google Fonts](https://fonts.google.com/)
  - Used 'Roboto' and 'Rubik'
- [Font Awesome](https://fontawesome.com/)
  - Used for social media icons and other icons
- [Favicon & App Icon Generator](https://www.favicon-generator.org/)
  - Used for generating Dengue's favicon
- [JSONLint formatter and validator](https://jsonlint.com/)
  - Used to format and validate the GeoJSON files
- [Mockflow](https://mockflow.com/)
  - Used to design and create the wireframes for this project
- [Git](https://git-scm.com/)
  - Used for version control to commit to Github
- [Github](https://github.com)
- [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
- [Am I Responsive?](http://ami.responsivedesign.is/?url=#)
  - Used to see across multiple devices with different screen sizes the responsiveness of the website
- [Screen To Gif](https://www.screentogif.com/)
  - Used to capture the responsive screens into a gif file
- [W3C Markup Validation service](https://validator.w3.org/)
  - Used to validate HTML codes and this result is returned 'Illegal character in query: | is not allowed.' This is ignored because the pipe "|" character is necessary for Google Fonts to allow additional fonts to be used
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
  - Used to validate CSS codes and this result is returned 'Congratulations! No Error Found.'
- [Esprima](https://esprima.org/demo/validate.html)
  - Used to validate all Javascript files and this result is returned 'Code is syntactically valid.'

## Testing

This website was tested on different web browsers and on different devices. I also requested friends and co-workers for feedback on what they liked and didn't like about this website. Adjustments were made accordingly until the final product upon project submission.

Devices and browesers:

- iPad 3
  - Safari
- MacBook Air
  - Google Chrome
  - Firefox
  - Safari
- MacBook Pro
  - Google Chrome
  - Firefox
  - Safari
- MacPro
  - Google Chrome
  - Firefox
- Windows 10 Enterprise
  - Google Chrome
  - Mircosoft Edge
- Samsung Galaxy Core Prime, Samsung Galaxy S7 edge
  - Google Chrome
  - Samsung web browser
- Redmi Note 4x and 7
  - Google Chrome

Additionally, Google Chrome Devtools was used throughout the project to view this website on a number of stimulated mobile, tablet, laptop and desktop devices to ensure compatibility and responsiveness. Devices include Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5 / SE, iPhone 6/7/8, iPhone 6/7/8 plus, iPhone X, iPad, and iPad Pro.

I found that a standard font size does not work for all screen sizes, so I added a base `font-size: 16px` on the `html` in the css file, and adjusted accordingly using `rem` instead of `px`. Where needed to fit the elements neatly in place, I used media queries as well.

All links will open in a new tab having used `target="_blank"` for each 'a tag.' They have been manually tested in each browser to ensure that they point to the correct destination.

After a zone or the Singapore button is clicked, I confirmed that the boxes and polygons on the google map shows info-windows by clicking (phone and tablet) or mouse-over (desktop) each one to visually check.

Also, all the amenities are clicked on and I confirmed all the google markers show info-windows by clicking (on phone and tablet) or mouse-over (desktop) to ensure they pop up. For the mouse-over one I also tested that they 'disappear' when I mouse-out.

I made sure the console doesn't log any error messages on page loading. I had particularly fixed a "Uncaught DOMException: Failed to execute 'querySelector'..." bug by experimenting with introducing `data-target="#idname"` and found that I could just add an id target to the `a href="#"` instead. I read about this fix on [github](https://github.com/twbs/bootstrap/issues/27903).

## Deployment

Git was used for version control and [Github](<(https://github.com)>) hosts the repository for all commits

Please click on [Dengue](https://paddlepop25.github.io/trent-project-2-dengue/) to find the deployed website, using Github pages. The pages will automatically be updated upon new commits to the master branch

### How to save the project to a local computer

These are steps to follow if you would like to run this code locally:

#### Download

1. Download [this repository](https://github.com/Paddlepop25/trent-project-2-dengue) from the Github repository
2. At the right hand side, click on green button _Clone or download_ then _Download ZIP_. The repository will automatically be downloaded into a ZIP folder on your computer
3. Uncompress the ZIP folder
4. Double click on the HTML file to open with the default browser of your computer or right click on the HTML file to choose a preferred browser
5. The rest of the files are available if you would like to make changes to the website according to your liking

#### Clone

1. Clone this repository from the Github repository from [(https://github.com/Paddlepop25/trent-project-2-dengue)](<(https://github.com/Paddlepop25/trent-project-2-dengue)>)
2. At the right hand side, click on green button _Clone or download_ then copy the URL shown in the input box
3. In your IDE of choice, paste `git clone https://github.com/Paddlepop25/trent-project-2-dengue.git` into your terminal.
4. This repository will automatically be cloned into a folder on your computer
5. To break the connection with this Github repository, enter `git remote rm origin` into your terminal

## Credits

Many of the sections describing dengue were taken from the [Ministry of Health website](https://www.moh.gov.sg/diseases-updates/dengue) and [IAMAT website](https://www.iamat.org/country/singapore/risk/dengue)

Longitude and Latitude reference taken from [travelmath](https://www.travelmath.com/cities/Tampines,+Singapore)

Connect to API using Javascript taken from [programmableweb](https://www.programmableweb.com/news/how-to-connect-to-api-javascript/how-to/2018/06/17)

### Codes

- Mobile hamburger animation [icon](https://codepen.io/pedrocampos/details/gufrx?__cf_chl_jschl_tk__=4301a43ed3ae401d3bf3cbf00203f9c346fcac5b-1576030369-0-AQyJPtvVKZsCoPOt-2pOJCt5f1Ay4HL9xVwRIHUeHlqefdOFSeq-7itzFyE0Z6xZtavNZ_8V9wvi6H4DcyaAQITqyPySxxroNis4F0wlmJ7_zOCbJ7SmtpKg5v_gS0nxugDC_Cz83EBb8ISBozBiFRnFBTGolNJGCajoce4Bcl94-61BmeY2cCEmIKIKYaSYxEe5Ubfz88Yoc3PlBMybgn1SIGtXh0Vqiv0KjTuihV3QXzkyRpBuLZIV9FpI5cK3tMa-R6mlSO6Fi8-QrWoELSxKx5JqwQqxuD9Z5a_kCN45bqkZ4-X8N7q14FolseoXJsDNtCPJniB1KUtaZGlRNOGdJIu0NwLb68KUUKLqyNaT)
- [Smooth scrolling](http://www.javascriptkit.com/javatutors/scrolling-html-bookmark-javascript.shtml) navbar links
- Adapted some codes from [StackOverflow](https://stackoverflow.com/questions/51334153/google-maps-api-getting-infowindow-on-click-with-geojson-file) for displaying info-windows
- Mosquito [buzzing](https://css-tricks.com/snippets/css/shake-css-keyframe-animation/)

### GeoJSON files

- https://data.gov.sg/search?q=dengue
  - files on zonal and whole of country's dengue clusters

### Images

Images of Mosquito icons

1. https://www.iconfinder.com/icons/2178054/aedes_dengue_mosquito_no_prevent_sign_zika_icon
2. https://www.onlinewebfonts.com/icon/562335
3. https://www.onlinewebfonts.com/icon/438501
4. https://mustsharenews.com/wp-content/uploads/2019/02/dengue-mozzie-wipeout.jpg

**This is for educational use**
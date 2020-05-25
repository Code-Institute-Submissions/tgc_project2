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

Next [here](https://alexiahsu.github.io/tgc_project2/#interactive) brings users to the most exciting part - where they can easily decipher covid-19 related data with the bar chart breakdown of the statuses and the ratio of recovery. Both of which have labels and data if the mouse hovers over the charts. After which, the map serves as an point of interaction - where users can simply hover over the country of interest to see the total number of cases. Likewise, users can choose to scroll through the table list of countries and covid-19 data, search by country name, or skip this part simply by clicking on 'collapse all'. On this note, it is my deliberate intention to .show() the table so that users can't simply skip this, but can still choose to opt out if needed. Should users choose to scroll through the tables, mouse-hover will trigger a highlight for the tablerow to help users focus on the country and the respective data.

After reading through the data, the users are then [educated](https://alexiahsu.github.io/tgc_project2/#prevent) how they can do their part to battle this virus. They can either be wary of the symptoms, to help themselves or others, and also prevent it by Singapore's recommended social distancing measures.

Lastly, amidst all the statistics and information, users are presented with 3 most recently published [articles](https://alexiahsu.github.io/tgc_project2/#articles) which are segmented into local and global news. This allows users to stay aware both locally and as a global citizen.

## Wireframes

Wireframes were created on powerpoint to help visualise the look and feel of the webpage - likewise, PPT is a cost-free and simple-to-use platform for wireframing. [See wireframe here](https://github.com/alexiahsu/tgc_project2/tree/master/wireframe) 

## User Stories

Objectives:
1. To build an elegant and easy-to-navigate webpage for users of any background
2. Provide understandable, accurate and crucial information on covid-19.
3. A lens through the local scene and the global situation
4. Captivate audience with interactive activities that help enhances knowledge about global situation
5. Provide short but effective information on symptoms and prevention
6. To showcase my current skills of utilising CSS3, HTML5, Javascript, Google Charts API and other tools (see credits)


## Features

- Data is available for charts and maps upon mouse hover
- Pool in covid-19 data for both local and global situation
- Table row will be highlighted upon hover to help users keep track of where they are navigating
- Navigation bar remains sleek and clean to free users of distraction
- Search through covid19 statistics across all countries or simply skip the step with 'collapse all'
- Geochart is color-coded to level of severity - users can, at a glance, understand which areas are spreading like wildfire.
- 

## Future features

- To design a form for users to enter details and provide donations
- Have a 'wall of fame' for donors - this is to entice other users to join the cause
- Design a centraldatabase to collate the amount of money raised and provide real-time updates about where the resources are going
- Have live testimonies from people who had contracted covid19 - share their stories to inspire others to join in this battle against the invisible enemy.
- 
## Technologies Used

Here are a list of programming languages, frameworks, technologies and tools used for this website.

- CSS3
- HTML5
- JQuery
- JavaScript
- [Google Charts](https://developers.google.com/chart)
  - Used for geocharts, barcharts and ratio charts.
- [Visual Studio Code](https://code.visualstudio.com/)
  - Used as the IDE to write the codes for this project
- [Templated.co](https://templated.co/industrious)
  - Adapted CSS from here
- [Bootstrap 4.4.0 framework](https://getbootstrap.com/)
  - Used for back-up in case manual CSS did not work
- [Google Fonts](https://fonts.google.com/)
  - Used 'Roboto'
  - Used for version control to commit to Github
- [Github](https://github.com)
  - To host repository
- [Am I Responsive?](http://ami.responsivedesign.is/?url=#)
  - Used to see across multiple devices with different screen sizes the responsiveness of the website
- [Screen To Gif](https://www.getcloudapp.com/)
  - To capture live demo of the website

## Testing

This website was tested on different web browsers and on different devices. I also requested friends and co-workers for feedback on what they liked and didn't like about this website. Adjustments were made accordingly until the final product upon project submission.

Devices and browesers:

- Surface Laptop 2
  - Google Chrome
  - Firefox
  - Safari
- Surface Pro 6
  - Google Chrome
  - Firefox
  - Safari
- Samsung S8
  - Google Chrome
- iPhone 7
  - Google Chrome
  - Safari

## Issue
Should the interactive charts ((1) Bar chart, (2) Donut chart, (3) Geochart) not work, kindly refer to live demo and code for proof of usage.

## Deployment

Git was used for version control and [Github](<(https://github.com)>) hosts the repository for all commits

Please click on [Covid-19](https://alexiahsu.github.io/tgc_project2/) to find the deployed website, using Github pages. The pages will automatically be updated upon new commits to the master branch

### How to save the project to a local computer

These are steps to follow if you would like to run this code locally:

#### Download

1. Download [this repository](https://github.com/alexiahsu/tgc_project2/) from the Github repository
2. At the right hand side, click on green button _Clone or download_ then _Download ZIP_. The repository will automatically be downloaded into a ZIP folder on your computer
3. Uncompress the ZIP folder
4. Double click on the HTML file to open with the default browser of your computer or right click on the HTML file to choose a preferred browser
5. The rest of the files are available if you would like to make changes to the website according to your liking

#### Clone

1. Clone this repository from the Github repository from [(https://github.com/alexiahsu/tgc_project2/)](<(https://github.com/alexiahsu/tgc_project2/)>)
2. At the right hand side, click on green button _Clone or download_ then copy the URL shown in the input box
3. In your IDE of choice, paste `git clone https://github.com/alexiahsu/tgc_project2/.git` into your terminal.
4. This repository will automatically be cloned into a folder on your computer
5. To break the connection with this Github repository, enter `git remote rm origin` into your terminal

## Credits

Adapted data presentation from [COVID-19 Dashboard](https://covid-dashboards.web.app/)

Adapted CSS styles from [Industrious](https://templated.co/industrious)

### Codes

- [Smooth scrolling](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1) 

### Api Files

1. [News Api](https://newsapi.org/docs)
2. [Covid-19 Api](https://api.covid19api.com/)
3. [Google Charts](https://developers.google.com/chart)

### Images

Images

1. https://unsplash.com/s/photos/prevent
2. https://unsplash.com/s/photos/social-distancing
3. https://unsplash.com/s/photos/covid19

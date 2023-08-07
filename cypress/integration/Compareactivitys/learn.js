import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps";
import learn from "../../support/pom/compareactivityspom";
const l=new learn;

//Scenario: User login with the valid credintals
Given('user opened the browser and entered the url',()=>{
    l.getUrl();
    l.getExtra();
})
When('the user entered valid username and password',()=>{
    l.getUsernamepassword();
})
And('clicks on login button after entered valid credintals',()=>{
    l.getClick();
})
Then('the user navigated to halo page',()=>{
    l.getHalopage();
})
//Scenario:User on active course card 
Given('the user on the halo page',()=>{
    l.getHalopage();
})
When('the user clicks on the continue learning button',()=>{
    l.getContinue();
})

Then('the user navigated to home page',()=>{
    l.getHome()
})
//  Scenario:User comparing the level count in home page and level index page
Given('the user on the home page',()=>{
   
    l.getHome();
})
When('the user comparing the level count in home page and level index page',()=>{
    l.getCompareactivity();
})
And('the level count should be same in home page and level index page',()=>{
    l.getCompare1()
  
})
//  Scenario:User printing the units name in home page and level index page
Given('the user on the level index page',()=>{
    l.getLevevlindex()
    
})
When('the user gets the unit1 name in home page and level index page',()=>{
    l.getUnit1();
})
And('The unit1 name is printed on both pages',()=>{
    l.getUnitTitle();
})
//Scenario:User comparing the activities name in home page and level index page
Given('the user on the home page checking activities',()=>{
    l.getHomePage();
})
When('the user comparing the activities name in home page and level index page',()=>{
l.getVolu();
})
And('the activities name should be same in home page and level index page',()=>{
l.getConceptCompare();
})
//Scenario:User checking the activities count in home and level index page
Given('the user on the level index page check activities',()=>{
l.getLevevlindex();
})
When('the user clicks on Unit1 and then clicks on Vocabulary',()=>{
l.getVocabulary();
})
And('printed the count of activity in both pages',()=>{
    l.getVocabularyText();
})
Then('the activities count should be same',()=>{
    l.getVocabularyTextCounut()
})
//Scenario:User comparing completed activities count in home and level index page
Given('the user on the home to check completed activitys',()=>{
    l.getHomePage();
})
When('user get the count of completed activitys in home page and level index page',()=>{
l.getComletedActivity();
})
And('the user printed completed activities count and completed activities name',()=>{
   l.getComletedActivityText();
})
//Scenario:User printing the completed activities of unit1
Given('the user on the level index page check the unit1',()=>{
    l.getLevevlindex();
})
When('user printed completed activities name of unit1',()=>{
l.getUnit1Activity();
})
//Scenario: User printing the grammar part activities count in level index page
When('user clicks on grammar part of Unit1 in level index page',()=>{
    l.getGrammar();
})
Then('the grammar part in level index page is visible',()=>{
l.getGrammarPart();
})
And('user printing the grammar part activity count in level index page',()=>{
    l.getGrammarPartCount();
})
//Scenario:User printing the grammar part activities name in level index page
When('the user printing the grammar part activities name in level index page',()=>{
    l.getGrammarPartName();
})
//Scenario: User comparing the grammar part activities and completed activities count
When('the user comparing the grammar part activities and completed activities count',()=>{
l.getGrammarPartCountComparing();

})
And('the compared activities name in level index page is printed',()=>{
l.getComparedActivities();
})
// Scenario: User logout successfully
When('user clicks on logout button',()=>{
    l.getLogout();
})
Then('the user redirected to login page',()=>{
    l.getLogoutSuccess();
})
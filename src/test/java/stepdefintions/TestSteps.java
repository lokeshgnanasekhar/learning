package stepdefintions;


import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.ArrayList;
import java.util.List;


public class TestSteps {



    @And("^I Click on Login button$")
    public void iClickOnLoginButton() throws Throwable {
        System.out.println("Click on Login Button");
    }

   /* @Then("^I should enter username and password$")
    public void iShouldEnterUsernameAndPassword() throws Throwable {
        System.out.println("Enter Username and Password");
    }*/

    @And("^I click submit$")
    public void iClickSubmit() throws Throwable {
        System.out.println("Click Submit");
    }

    @Then("^I should enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iShouldEnterAnd(String username, String password) throws Throwable {
        System.out.println("UserName is :\""+ username+"\"");
        System.out.println("Password is :"+ password);
    }

    @Then("^I should enter below details$")
    public void iShouldEnterBelowDetails(DataTable dataTable) throws Throwable {

       /* List<List<String>> mylist  = dataTable.raw();


        for(List<String> list : mylist){
            System.out.print("|"+ list.get(0)+"|");
            System.out.println("|"+ list.get(1)+"|");
        }*/

         List<User> users = dataTable.asList(User.class);

         for(User u:users){
             System.out.print("|"+ u.getUsername()+"|");
             System.out.println("|"+ u.getPassword()+"|");
         }

    }

    @Then("^I should enter ([^\"]*) and ([^\"]*) details$")
    public void iShouldEnterUsernameAndPasswordDetails(String username, String password) throws Throwable {
        System.out.print("|"+ username+"|");
        System.out.println("|"+ password+"|");
    }
}


class User{

    private String username;
    private String password;

    public User() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
package stepdefintions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {

    @Before("@smoke")
    public void setUp(){
        System.out.println("Launch Browser");
    }

    @After
    public void tearDown(Scenario scenario){
        int count=0;
        if(scenario.isFailed()){
            //screenshot
            System.out.println(scenario.getName());
        }
        System.out.println("Exit Browser and generate reports");
    }
}

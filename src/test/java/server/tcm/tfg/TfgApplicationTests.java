package server.tcm.tfg;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = { "pretty", "html:target/calculator/features" },
		features = "classpath:features/calculator/calculator.feature"
)
public class TfgApplicationTests {

}

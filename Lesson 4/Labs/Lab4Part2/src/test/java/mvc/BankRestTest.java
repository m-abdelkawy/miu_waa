package mvc;


import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import mvc.domain.Account;
import org.junit.BeforeClass;
import org.junit.Test;

import java.time.LocalDate;
import java.util.HashMap;

import static org.hamcrest.Matchers.equalTo;

public class BankRestTest {
    @BeforeClass
    public static void setup() {
        RestAssured.port = Integer.valueOf(8090);
        RestAssured.baseURI = "http://localhost";
        RestAssured.basePath = "api";
    }

    @Test
    public void testGetAccount1() {
        // 01. add account
        int accountNumber = 123456;
        String accountHolder = "Ahmed Ali";
        Account account = new Account(accountNumber, accountHolder);
        RestAssured.given()
                .contentType("application/json")
                /*.pathParams(new HashMap<>() {{
                    put("accountNumber", accountNumber);
                    put("accountHolder", accountHolder);
                }})*/
//                .queryParam("accountNumber", accountNumber)
//                .queryParam("accountHolder", accountHolder)
                .body(account)
                .when().post("accounts")
                .then()
                .statusCode(201);

        // 02. get account and verify
        RestAssured.given()
                .when()
                .get("accounts/" + accountNumber)
                .then()
                .statusCode(200)
                .and()
                .body("accountNumber", equalTo(accountNumber))
                .body("accountHolder", equalTo(accountHolder))
                .body("balance", equalTo(Float.valueOf(0)));

        // 03. cleanup
        RestAssured.given()
                .when()
                .delete("accounts/" + accountNumber);
    }

    @Test
    public void testCreateAccount() {
        // 01. add account
        int accountNumber = 123456;
        String accountHolder = "Ahmed Ali";

        Account account = new Account(accountNumber, accountHolder);

        RestAssured.given()
                .contentType("application/json")
//                .queryParams(new HashMap<>() {{
//                    put("accountNumber", accountNumber);
//                    put("accountHolder", accountHolder);
//                }})
                .body(account)
                .when().post("accounts")
                .then()
                .statusCode(201)
                .and()
                .body("accountNumber", equalTo(accountNumber))
                .body("accountHolder", equalTo(accountHolder))
                .body("balance", equalTo(Float.valueOf(0)));


        // 02. get account and verify
        RestAssured.given()
                .when()
                .pathParam("accountNumber", accountNumber)
                .get("accounts/{accountNumber}")
                .then()
                .statusCode(200)
                .and()
                .body("accountNumber", equalTo(accountNumber))
                .body("accountHolder", equalTo(accountHolder))
                .body("balance", equalTo(Float.valueOf(0)));

        // 03. cleanup
        RestAssured.given()
                .when()
                .delete("accounts/" + accountNumber);
    }

    @Test
    public void testCreateAccountInvalidFields(){
        // 01. add account and verify bad request
        int accountNumber = -1;
        String accountHolder = "a";
        Account account = new Account(accountNumber, accountHolder);

        RestAssured.given()
                .contentType("application/json")
                .body(account)
                .when().post("accounts")
                .then()
                .statusCode(400)
                .and()
                .body("fieldErrors.accountNumber", equalTo("account number must not be less than 1"))
                .body("fieldErrors.accountHolder", equalTo("size must be between 2 and 30"));

        // 02. try get account and verify 404 not found
        RestAssured.given()
                .when().get("accounts/" + accountNumber)
                .then().statusCode(404)
                .and()
                .body("errorMessage", equalTo("Account with number: -1 is not available!"));
    }

    @Test
    public void testRemoveAccount() {
        // 01. add account
        int _accountNumber = 123456;
        String _accountHolder = "Ahmed Ali";

        Account account = new Account(_accountNumber, _accountHolder);

        RestAssured.given()
                .contentType(ContentType.JSON)
//                .queryParams(new HashMap<>() {{
//                    put("accountNumber", _accountNumber);
//                    put("accountHolder", _accountHolder);
//                }})
                .body(account)
                .post("accounts")
                .then()
                .statusCode(201);

        // 02. delete the added account
        RestAssured.given()
                .when()
                .pathParam("accountNumber", _accountNumber)
                .delete("accounts/{accountNumber}");

        // 03. get the deleted account to verify it no longer exists
        RestAssured.given()
                .when()
                .pathParam("accountNumber", _accountNumber)
                .get("accounts/{accountNumber}")
                .then()
                .statusCode(404)
                .and()
                .body("errorMessage", equalTo("Account with number: " + _accountNumber + " is not available!"));
    }

    @Test
    public void testDeposit(){
        // 01. add account
        int _accountNumber = 123456;
        String _accountHolder = "Ahmed Ali";
        float amount = 50;

        Account account = new Account(_accountNumber, _accountHolder);

        RestAssured.given()
                .contentType(ContentType.JSON)
//                .queryParams(new HashMap<>() {{
//                    put("accountNumber", _accountNumber);
//                    put("accountHolder", _accountHolder);
//                }})
                .body(account)
                .post("accounts")
                .then()
                .statusCode(201);

        // 02. deposit
        RestAssured.given()
                .contentType(ContentType.JSON)
                .pathParam("accountNumber", _accountNumber)
                .body(amount)
                .post("accounts/{accountNumber}/deposit")
                .then()
                .statusCode(200)
                .and()
                .body("balance", equalTo(Float.valueOf(amount)))
                //.body("transactions.get(0).transactionType", equalTo(TransactionType.DEPOSIT))
                .body("transactions.get(0).amount", equalTo(Float.valueOf(amount)))
                .body("transactions.get(0).date.toString().split(\"T\")[0]", equalTo(LocalDate.now().toString()));


        // 03. get account and check transactions

        // 04. cleanup
        RestAssured.given()
                .when()
                .pathParam("accountNumber", _accountNumber)
                .delete("accounts/{accountNumber}");
    }

    @Test
    public void testWithdraw(){
        // 01. add account
        int _accountNumber = 123456;
        String _accountHolder = "Ahmed Ali";
        Account account = new Account(_accountNumber, _accountHolder);
        float amount = 50;

        RestAssured.given()
                .contentType(ContentType.JSON)
//                .queryParams(new HashMap<>() {{
//                    put("accountNumber", _accountNumber);
//                    put("accountHolder", _accountHolder);
//                }})
                .body(account)
                .post("accounts")
                .then()
                .statusCode(201);

        // 02. deposit
        RestAssured.given()
                .contentType(ContentType.JSON)
                .pathParam("accountNumber", _accountNumber)
                .body(amount)
                .post("accounts/{accountNumber}/deposit")
                .then()
                .statusCode(200)
                .and()
                .body("balance", equalTo(Float.valueOf(amount)))
                //.body("transactions.get(0).transactionType", equalTo(TransactionType.DEPOSIT))
                .body("transactions.get(0).amount", equalTo(Float.valueOf(amount)))
                .body("transactions.get(0).date.toString().split(\"T\")[0]", equalTo(LocalDate.now().toString()));

        // 03. withdraw
        RestAssured.given()
                .contentType(ContentType.JSON)
                .pathParam("accountNumber", _accountNumber)
                .body(amount/2)
                .post("accounts/{accountNumber}/withdraw")
                .then()
                .statusCode(200)
                .and()
                .body("balance", equalTo(Float.valueOf(amount/2)))
                //.body("transactions.get(0).transactionType", equalTo(TransactionType.DEPOSIT))
                .body("transactions.get(1).amount", equalTo(Float.valueOf(amount/2)))
                .body("transactions.get(1).date.toString().split(\"T\")[0]", equalTo(LocalDate.now().toString()));

        // 03. get account and check transactions

        // 04. cleanup
        RestAssured.given()
                .when()
                .pathParam("accountNumber", _accountNumber)
                .delete("accounts/{accountNumber}");
    }
}

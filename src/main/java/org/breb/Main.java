package org.breb;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.javalin.Javalin;
import io.javalin.http.Context;

import java.util.Map;

public class Main {

    public static void main(String[] args) {
        Javalin app = Javalin.create(javalinConfig -> {
            javalinConfig.showJavalinBanner = false;
            javalinConfig.addStaticFiles("web");
            javalinConfig.enableCorsForAllOrigins();
        });

        app.post("/send", Main::handleData);

        app.start(5800);

     }

    private static void handleData(Context ctx) {
            System.out.println(ctx.body());
            ctx.redirect("index.html");
    }
}

package org.breb;

import io.javalin.Javalin;

public class Main {

    public static void main(String[] args) {
        Javalin app = Javalin.create(javalinConfig -> {
            javalinConfig.showJavalinBanner = false;
            javalinConfig.addStaticFiles("web");
            javalinConfig.enableCorsForAllOrigins();
        });

        app.start(80);

     }
}

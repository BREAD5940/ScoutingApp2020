package org.breb

import io.javalin.Javalin
import io.javalin.core.JavalinConfig
import io.javalin.http.Context

object Main {
    @JvmStatic
    fun main(args: Array<String>) {
        val app = Javalin.create { javalinConfig: JavalinConfig ->
            javalinConfig.showJavalinBanner = false
            javalinConfig.addStaticFiles("web")
            javalinConfig.enableCorsForAllOrigins()
        }
        app.post("/send") { handleData(it) }
        app.start(5800)
    }

    private fun handleData(ctx: Context) {
        println(ctx.body())

        // img-size=&start-time=1583798648574&shots=&climb-start=&climb-end=&cap1Time=&cap2Time=&cap3Time=&rotTime=&posTime=&Name=a&Team%23=&Match%23=&Alliance-station=Red1&startPostion=50&x=&y=&time=&inner=0&outer=0&lower=0&miss=0&trench=0&pin=0&human=0&touch=0&rdz=0&protecc=0&tech=0&foul=0&total-rp=&total-points=&driveRank=0&playRank=0&defRank=0&defAvoidRank=0&notes=&submit=Submit+Data
        val imgSize = ctx.req.getParameter("img-size")
        val startTime = ctx.req.getParameter("start-time")
        println("started at $startTime")
        ctx.redirect("index.html")
    }
}
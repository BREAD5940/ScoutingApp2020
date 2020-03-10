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
        fun param(key: String) = ctx.req.getParameter(key)

        val imgSize = param("img-size")
        val startTime = param("start-time")
        val shots = param("shots")
        val climbStart = param("climb-start")
        val climbEnd = param("climb-end")
        val cap1Time = param("cap1Time")
        val cap2Time = param("cap2Time")
        val cap3Time = param("cap3Time")
        val rotTime = param("rotTime")
        val posTime = param("posTime")
        val Name = param("Name")
        val teamNum = param("Team%23")
        val matchNum = param("Match%23")
        val allianceStation = param("Alliance-station")
        val startPostion = param("startPostion")
        val x = param("x")
        val y = param("y")
        val time = param("time")
        val inner = param("inner")
        val outer = param("outer")
        val lower = param("lower")
        val miss = param("miss")
        val trench = param("trench")
        val pin = param("pin")
        val human = param("human")
        val touch = param("touch")
        val rdz = param("rdz")
        val protecc = param("protecc")
        val tech = param("tech")
        val foul = param("foul")
        val totalRp = param("total-rp")
        val totalPoints = param("total-points")
        val driveRank = param("driveRank")
        val playRank = param("playRank")
        val defRank = param("defRank")
        val defAvoidRank = param("defAvoidRank")
        val notes = param("notes")

        println("started at $startTime")
        ctx.redirect("index.html")
    }
}
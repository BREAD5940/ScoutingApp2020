package org.breb

import io.javalin.Javalin
import io.javalin.core.JavalinConfig
import io.javalin.http.Context

object Main {
    @JvmStatic
    fun main(args: Array<String>) {
//        val app = Javalin.create { javalinConfig: JavalinConfig ->
//            javalinConfig.showJavalinBanner = false
//            javalinConfig.addStaticFiles("web")
//            javalinConfig.enableCorsForAllOrigins()
//        }
//        app.post("/send") { handleData(it) }
//        app.start(5800)

        handleData("img-size=%7B1368%2C672%7D&start-time=1583801422960&shots=%7B%28%2C%29%3BOUTER%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BMISS%3B1583801431982%7D%3B&climb-start=1583801443821&climb-end=1583801444498&cap1Time=&cap2Time=&cap3Time=&rotTime=&posTime=&Name=breb&Team%23=5940&Match%23=2&Alliance-station=Red2&startPostion=6&x=0&y=0&time=0&inner=0&outer=0&lower=0&miss=0&trench=0&pin=0&human=0&touch=0&rdz=0&protecc=0&tech=0&foul=0&climbSucc=on&buddy=on&total-rp=&total-points=&driveRank=5&playRank=3&defRank=1&defAvoidRank=3&notes=meh+ig&submit=Submit+Data")

    }

    private fun handleData(body: String) {
//        println(ctx.body())
//        fun param(key: String) = ctx.req.getParameter(key)

//        img-size=%7B1368%2C672%7D&start-time=1583801422960&shots=%7B%28%2C%29%3BOUTER%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BMISS%3B1583801431982%7D%3B&climb-start=1583801443821&climb-end=1583801444498&cap1Time=&cap2Time=&cap3Time=&rotTime=&posTime=&Name=breb&Team%23=5940&Match%23=2&Alliance-station=Red2&startPostion=6&x=0&y=0&time=0&inner=0&outer=0&lower=0&miss=0&trench=0&pin=0&human=0&touch=0&rdz=0&protecc=0&tech=0&foul=0&climbSucc=on&buddy=on&total-rp=&total-points=&driveRank=5&playRank=3&defRank=1&defAvoidRank=3&notes=meh+ig&submit=Submit+Data

        val params = body.split("&")

//        println(params)

        operator fun List<String>.get(key: String): String {
            this.forEach {
                if(it.startsWith(key)) {
                    println(it)
                    return it.substring(key.length + 1, it.length)
                }
            }
            return ""
        }

        val imgSize = params["img-size"]
        val startTime = params["start-time"]
        val shots = params["shots"]
        val climbStart = params["climb-start"]
        val climbEnd = params["climb-end"]
        val cap1Time = params["cap1Time"]
        val cap2Time = params["cap2Time"]
        val cap3Time = params["cap3Time"]
        val rotTime = params["rotTime"]
        val posTime = params["posTime"]
        val Name = params["Name"]
        val teamNum = params["Team%23"]
        val matchNum = params["Match%23"]
        val allianceStation = params["Alliance-station"]
        val startPostion = params["startPostion"]
        val x = params["x"]
        val y = params["y"]
        val time = params["time"]
        val inner = params["inner"]
        val outer = params["outer"]
        val lower = params["lower"]
        val miss = params["miss"]
        val trench = params["trench"]
        val pin = params["pin"]
        val human = params["human"]
        val touch = params["touch"]
        val rdz = params["rdz"]
        val protecc = params["protecc"]
        val tech = params["tech"]
        val foul = params["foul"]
        val totalRp = params["total-rp"]
        val totalPoints = params["total-points"]
        val driveRank = params["driveRank"]
        val playRank = params["playRank"]
        val defRank = params["defRank"]
        val defAvoidRank = params["defAvoidRank"]
        val notes = params["notes"]

//        println("started at $startTime")
//        ctx.redirect("index.html")
    }
}
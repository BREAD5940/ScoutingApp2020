package org.breb

import io.javalin.Javalin
import io.javalin.core.JavalinConfig
import io.javalin.http.Context
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import java.text.DateFormat
import java.text.SimpleDateFormat
import java.time.Instant
import java.util.*

object Main {
    @JvmStatic
    fun main(args: Array<String>) {
        val app = Javalin.create { javalinConfig: JavalinConfig ->
            javalinConfig.showJavalinBanner = false
            javalinConfig.addStaticFiles("web")
            javalinConfig.enableCorsForAllOrigins()
        }
        app.post("/send") { handleData(it.body()) }
        app.start(5800)

//        handleData("img-size=%7B1368%2C672%7D&start-time=1583801422960&shots=%7B%28%2C%29%3BOUTER%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BMISS%3B1583801431982%7D%3B&climb-start=1583801443821&climb-end=1583801444498&cap1Time=&cap2Time=&cap3Time=&rotTime=&posTime=&Name=breb&Team%23=5940&Match%23=2&Alliance-station=Red2&startPostion=6&x=0&y=0&time=0&inner=0&outer=0&lower=0&miss=0&trench=0&pin=0&human=0&touch=0&rdz=0&protecc=0&tech=0&foul=0&climbSucc=on&buddy=on&total-rp=&total-points=&driveRank=5&playRank=3&defRank=1&defAvoidRank=3&notes=meh+ig&submit=Submit+Data")

//        SheetsMemes.main()

    }

    private fun handleData(body: String) {
//        println(ctx.body())
//        fun param(key: String) = ctx.req.getParameter(key)

//        img-size=%7B1368%2C672%7D&start-time=1583801422960&shots=%7B%28%2C%29%3BOUTER%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28%2C%29%3BMISS%3B1583801428757%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BINNER%3B1583801431982%7D%3B%7B%28370%2C168%29%3BMISS%3B1583801431982%7D%3B&climb-start=1583801443821&climb-end=1583801444498&cap1Time=&cap2Time=&cap3Time=&rotTime=&posTime=&Name=breb&Team%23=5940&Match%23=2&Alliance-station=Red2&startPostion=6&x=0&y=0&time=0&inner=0&outer=0&lower=0&miss=0&trench=0&pin=0&human=0&touch=0&rdz=0&protecc=0&tech=0&foul=0&climbSucc=on&buddy=on&total-rp=&total-points=&driveRank=5&playRank=3&defRank=1&defAvoidRank=3&notes=meh+ig&submit=Submit+Data

        val params = body.split("&")

//        println(params)

        operator fun List<String>.get(key: String): String {
            this.forEach {
                if (it.startsWith(key)) {
//                    println(it)
                    val subString = it.substring(key.length + 1, it.length)
                    return unescape(subString)
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

        var currentTime = SimpleDateFormat("MM/dd/yyyy hh:mm:ss").format(Date.from(Instant.now()))

//        GlobalScope.launch {
            SheetsMemes.addData(listOf(
                    currentTime,
                    imgSize,
                    startTime,
                    shots,
                    climbStart,
                    climbEnd,
                    cap1Time,
                    cap2Time,
                    cap3Time,
                    rotTime,
                    posTime,
                    Name,
                    teamNum,
                    matchNum,
                    allianceStation,
                    startPostion,
                    x,
                    y,
                    time,
                    inner,
                    outer,
                    lower,
                    miss,
                    trench,
                    pin,
                    human,
                    touch,
                    rdz,
                    protecc,
                    tech,
                    foul,
                    totalRp,
                    totalPoints,
                    driveRank,
                    playRank,
                    defRank,
                    defAvoidRank,
                    notes
            ))
//        }

//        println("started at $startTime")
//        ctx.redirect("index.html")
    }

    private fun submitToGoogleForms(entries: List<String>) {
//        S.addData(entries)
    }

    fun unescape(input: String): String {

        val ret = input
                .replace("%20", " ")
                .replace("%21", "!")
                .replace("%22", "\"")
                .replace("%23", "#")
                .replace("%24", "$")
                .replace("%25", "%")
                .replace("%26", "&")
                .replace("%27", "\'")
                .replace("%28", "(")
                .replace("%29", ")")
                .replace("%2A", "*")
                .replace("%2B", "+")
                .replace("%2C", ",")
                .replace("%2D", "-")
                .replace("%2E", ".")
                .replace("%2F", "/")

                .replace("%30", "0")
                .replace("%31", "1")
                .replace("%32", "2")
                .replace("%33", "3")
                .replace("%34", "4")
                .replace("%35", "5")
                .replace("%36", "6")
                .replace("%37", "7")
                .replace("%38", "8")
                .replace("%39", "9")

                .replace("%3B", ";")
                .replace("%3F", "?")

                .replace("%7B", "{")
                .replace("%7D", "}")
        return ret
    }

}
const natija = document.querySelector(".natija span")
const FORM = document.querySelector("form")
FORM.addEventListener("submit", misollar)
const input1 = document.querySelector(".input1")
// const input2 = document.querySelector(".input2")
// const select = document.querySelector("select")
function misollar(event) {
    event.preventDefault()
    switch (input1.value) {
        // 1
        case "apple":
            natija.innerHTML = "olma"
            break;
        case "olma":
            natija.innerHTML = "apple"
            break;
            case "sarvar":
                natija.innerHTML = "ko't"
                break;
            case "ko't":
                natija.innerHTML = "sarvar"
                break; 
                case "ziyodulla":
                    natija.innerHTML = "dalbayop"
                    break;
                case "dalbayop":
                    natija.innerHTML = "ziyodulla"
                    break;   
        
                    case "bekzod":
                        natija.innerHTML = "ko't"
                        break;
                    case "ko't":
                        natija.innerHTML = "bekzod"
                        break;  
                
                        case "mirzohid":
                            natija.innerHTML = "dalbayop"
                            break;
                        case "dalbayop":
                            natija.innerHTML = "mirzohid"
                            break; 
                         

                            case "dilshoda":
                                natija.innerHTML = "...qo'ng'iz"
                                break;
                            case "...qo'ng'iz":
                                natija.innerHTML = "dilshoda"
                                break; 
        // 2
        case "car":
            natija.innerHTML = "mashina"
            break;
        case "mashina":
            natija.innerHTML = "car"
            break;
        // 3
        case "comfortable":
            natija.innerHTML = "qulay"
            break;
        case "qulay":
            natija.innerHTML = "comfortable"
            break;
        // 4
        case "white":
            natija.innerHTML = "oq"
            break;
        case "oq":
            natija.innerHTML = "white"
            break;
        // 5
        case "red":
            natija.innerHTML = "qizil"
            break;
        case "qizil":
            natija.innerHTML = "red"
            break;
        // 6
        case "black":
            natija.innerHTML = "qora"
            break;
        case "qora":
            natija.innerHTML = "black"
            break;
        // 7
        case "yellow":
            natija.innerHTML = "sariq"
            break;
        case "sariq":
            natija.innerHTML = "yellow"
            break;
        // 8
        case "hello":
            natija.innerHTML = "salom"
            break;
        case "salom":
            natija.innerHTML = "hello"
            break;
        // 9
        case "goodbye":
            natija.innerHTML = "xayr"
            break;
        case "xayr":
            natija.innerHTML = "Goodbye"
            break;
        // 10
        case "thank you ":
            natija.innerHTML = "raxmat"
            break;
        case "raxmat ":
            natija.innerHTML = "Thank you"
            break;
        // 11
        case "yes":
            natija.innerHTML = "ha"
            break;
        case "ha":
            natija.innerHTML = "yes"
            break;
        // 12
        case "no":
            natija.innerHTML = "yo'q"
            break;
        case "yo'q":
            natija.innerHTML = "no"
            break;
        // 13
        case "please":
            natija.innerHTML = "iltimos"
            break;
        case "iltimos":
            natija.innerHTML = "please"
            break;
        // 14
        case "sorry":
            natija.innerHTML = "uzr"
            break;
        case "ezr":
            natija.innerHTML = "sorry"
            break;
        // 15
        case "help":
            natija.innerHTML = "yordam"
            break;
        case "yordam":
            natija.innerHTML = "help"
            break;
        // 16
        case "today":
            natija.innerHTML = "bugun"
            break;
        case "bugun":
            natija.innerHTML = "today"
            break;
        // 17
        case "tomorrow":
            natija.innerHTML = "ertaga"
            break;
        case "ertaga":
            natija.innerHTML = "tomorrow"
            break;
        // 18
        case "friend":
            natija.innerHTML = "do'st"
            break;
        case "do'st":
            natija.innerHTML = "friend"
            break;
        // 19
        case "family":
            natija.innerHTML = "oila"
            break;
        case "oila":
            natija.innerHTML = "family"
            break;
        // 20
        case "love":
            natija.innerHTML = "sevgi"
            break;
        case "sevgi":
            natija.innerHTML = "love"
            break;
        // 21
        case "happy":
            natija.innerHTML = "hursand"
            break;
        case "hursand":
            natija.innerHTML = "happy"
            break;
        // 22
        case "sad":
            natija.innerHTML = "xafa"
            break;
        case "xafa":
            natija.innerHTML = "sad"
            break;
        // 23
        case "ugly":
            natija.innerHTML = "qo'rqinchli"
            break;
        case "qo'rqinchli":
            natija.innerHTML = "ugly"
            break;
        // 24
        case "hot":
            natija.innerHTML = "issiq"
            break;
        case "issiq":
            natija.innerHTML = "hot"
            break;
        // 25
        case "big":
            natija.innerHTML = "katta"
            break;
        case "katta":
            natija.innerHTML = "big"
            break;
        // 26
        case "small":
            natija.innerHTML = "kichkina"
            break;
        case "kichkina":
            natija.innerHTML = "small"
            break;
        // 27
        case "fast":
            natija.innerHTML = "tez"
            break;
        case "tez":
            natija.innerHTML = "fast"
            break;
        // 28
        case "slow":
            natija.innerHTML = "sekin"
            break;
        case "sekin":
            natija.innerHTML = "slow"
            break;
        // 29
        case "eat":
            natija.innerHTML = "yemoq"
            break;
        case "yemoq":
            natija.innerHTML = "eat"
            break;
        // 30
        case "drink":
            natija.innerHTML = "ichmoq"
            break;
        case "ichmoq":
            natija.innerHTML = "drink"
            break;
        // 31
        case "sleep":
            natija.innerHTML = "uxlamoq"
            break;
        case "uxlamoq":
            natija.innerHTML = "sleep"
            break;
        // 32
        case "read":
            natija.innerHTML = "o'qimoq"
            break;
        case "o'qimoq":
            natija.innerHTML = "read"
            break;
        // 33
        case "write":
            natija.innerHTML = "yozmoq"
            break;
        case "yozmoq":
            natija.innerHTML = "write"
            break;
        // 34
        case "listen":
            natija.innerHTML = "eshitmoq"
            break;
        case "eshitmoq":
            natija.innerHTML = "listen"
            break;
        // 35
        case "speak":
            natija.innerHTML = "gapirmoq"
            break;
        case "gapirmoq":
            natija.innerHTML = "speak"
            break;
        // 36
        case "full":
            natija.innerHTML = "to'la"
            break;
        case "to'la":
            natija.innerHTML = "full"
            break;
        // 37
        case "old":
            natija.innerHTML = "eski"
            break;
        case "eski":
            natija.innerHTML = "old"
            break;
        // 38
        case "dirty":
            natija.innerHTML = "iflos"
            break;
        case "iflos":
            natija.innerHTML = "dirty"
            break;
        // 39
        case "clean":
            natija.innerHTML = "toza"
            break;
        case "toza":
            natija.innerHTML = "clean"
            break;
        // 40
        case "dark":
            natija.innerHTML = "qorong'u"
            break;
        case "qorong'u":
            natija.innerHTML = "dark"
            break;
        // 41
        case "light":
            natija.innerHTML = "yorug'"
            break;
        case "yorug'":
            natija.innerHTML = "light"
            break;
        // 42
        case "pull":
            natija.innerHTML = "tortish"
            break;
        case "tortish":
            natija.innerHTML = "pull"
            break;
        // 43
        case "stop":
            natija.innerHTML = "to'xtatish"
            break;
        case "to'xlatish":
            natija.innerHTML = "stop"
            break;
        // 44
        case "start":
            natija.innerHTML = "boshlash"
            break;
        case "boshlash":
            natija.innerHTML = "start"
            break;
        // 45
        case "close":
            natija.innerHTML = "yopish"
            break;
        case "yopish":
            natija.innerHTML = "close"
            break;
        // 46
        case "open":
            natija.innerHTML = "ochish"
            break;
        case "ochish":
            natija.innerHTML = "open"
            break;
        // 47
        case "down":
            natija.innerHTML = "pastki"
            break;
        case "pastki":
            natija.innerHTML = "down"
            break;
        // 47
        case "up":
            natija.innerHTML = "yuqoriga"
            break;
        case "yuqoriga":
            natija.innerHTML = "up"
            break;
        // 48
        case "left":
            natija.innerHTML = "chap"
            break;
        case "chap":
            natija.innerHTML = "left"
            break;
        // 49
        case "right":
            natija.innerHTML = "o'ng"
            break;
        case "o'ng":
            natija.innerHTML = "right"
            break;
        // 50
        case "low":
            natija.innerHTML = "past"
            break;
        case "past":
            natija.innerHTML = "low"
            break;
        // 51
        case "sick":
            natija.innerHTML = "kasal"
            break;
        case "kasal":
            natija.innerHTML = "sick"
            break;
        // 52
        case "angry":
            natija.innerHTML = "jahl"
            break;
        case "jahl":
            natija.innerHTML = "angry"
            break;
        // 53
        case "year":
            natija.innerHTML = "yil"
            break;
        case "yil":
            natija.innerHTML = "year"
            break;
        // 54
        case "month":
            natija.innerHTML = "oy"
            break;
        case "oy":
            natija.innerHTML = "month"
            break;
        //55
        case "week":
            natija.innerHTML = "hafta"
            break;
        case "hafta":
            natija.innerHTML = "week"
            break;
        // 56
        case "day":
            natija.innerHTML = "kun"
            break;
        case "kun":
            natija.innerHTML = "day"
            break;
        // 57
        case "run":
            natija.innerHTML = "yugurmoq"
            break;
        case "yugurmoq":
            natija.innerHTML = "run"
            break;
        // 58
        case "left":
            natija.innerHTML = "chap"
            break;
        case "chap":
            natija.innerHTML = "left"
            break;
        // 59
        case "learn":
            natija.innerHTML = "o'rganish"
            break;
        case "o'rganish":
            natija.innerHTML = "learn"
            break;
        // 60
        case "student":
            natija.innerHTML = "o'quvchi"
            break;
        case "o'quvchi":
            natija.innerHTML = "student"
            break;
        // 70
        case "teacher":
            natija.innerHTML = "o'qituvchi"
            break;
        case "o'qituvchi":
            natija.innerHTML = "teacher"
            break;
        // 71
        case "school":
            natija.innerHTML = "maktab"
            break;
        case "maktab":
            natija.innerHTML = "school"
            break;
        // 72
        case "book":
            natija.innerHTML = "kitob"
            break;
        case "kitob":
            natija.innerHTML = "book"
            break;
        // 73
        case "play":
            natija.innerHTML = "o'ynash"
            break;
        case "o'ynash":
            natija.innerHTML = "play"
            break;
        // 74
        case "work":
            natija.innerHTML = "ish"
            break;
        case "ish":
            natija.innerHTML = "work"
            break;
        // 75
        case "home":
            natija.innerHTML = "uy"
            break;
        case "uy":
            natija.innerHTML = "home"
            break;
        // 76
        case "water":
            natija.innerHTML = "suv"
            break;
        case "suv":
            natija.innerHTML = "water"
            break;
        // 77
        case "food":
            natija.innerHTML = "ovqat"
            break;
        case "ovqat":
            natija.innerHTML = "food"
            break;
        // 78
        case "morning":
            natija.innerHTML = "ertalab"
            break;
        case "ertalab":
            natija.innerHTML = "morning"
            break;
        // 79
        case "night":
            natija.innerHTML = "tun"
            break;
        case "tun":
            natija.innerHTML = "night"
            break;
        // 80
        case "evening":
            natija.innerHTML = "kech"
            break;
        case "kech":
            natija.innerHTML = "evening"
            break;
        // 81
        case "i":
            natija.innerHTML = "men"
            break;
        case "men":
            natija.innerHTML = "i"
            break;
        // 82
        case "you":
            natija.innerHTML = "siz"
            break;
        case "siz":
            natija.innerHTML = "you"
            break;
        // 83
        case "we":
            natija.innerHTML = "biz"
            break;
        case "biz":
            natija.innerHTML = "we"
            break;
        // 84
        case "they":
            natija.innerHTML = "ular"
            break;
        case "ular":
            natija.innerHTML = "they"
            break;
        // 85
        case "where":
            natija.innerHTML = "qayerda"
            break;
        case "qayerda":
            natija.innerHTML = "qayerda"
            break;
        // 86
        case "when":
            natija.innerHTML = "qachon"
            break;
        case "qachon":
            natija.innerHTML = "when"
            break;
        // 87
        case "why":
            natija.innerHTML = "nimaga"
            break;
        case "nimaga":
            natija.innerHTML = "why"
            break;
        // 88
        case "what":
            natija.innerHTML = "nima"
            break;
        case "nima":
            natija.innerHTML = "what"
            break;
        // 89
        case "which":
            natija.innerHTML = "qaysi"
            break;
        case "qaysi":
            natija.innerHTML = "which"
            break;
        // 90
        case "bad":
            natija.innerHTML = "yomon"
            break;
        case "yomon":
            natija.innerHTML = "evening"
            break;
        // 91
        case "star":
            natija.innerHTML = "yulduz"
            break;
        case "yulduz":
            natija.innerHTML = "star"
            break;
        // 92
        case "fire":
            natija.innerHTML = "olov"
            break;
        case "olov":
            natija.innerHTML = "fire"
            break;
        // 93
        case "tree":
            natija.innerHTML = "daraxt"
            break;
        case "daraxt":
            natija.innerHTML = "tree"
            break;
        // 94
        case "bird":
            natija.innerHTML = "qush"
            break;
        case "qush":
            natija.innerHTML = "bird"
            break;
        // 95
        case "pen":
            natija.innerHTML = "ruchka"
            break;
        case "ruchka":
            natija.innerHTML = "pen"
            break;
        // 96
        case "pencil":
            natija.innerHTML = "qalam"
            break;
        case "qalam":
            natija.innerHTML = "penchil"
            break;
        // 97
        case "time":
            natija.innerHTML = "vaqt"
            break;
        case "vaqt":
            natija.innerHTML = "time"
            break;
        // 98
        case "money":
            natija.innerHTML = "pul"
            break;
        case "pul":
            natija.innerHTML = "money"
            break;
        // 99
        case "earth":
            natija.innerHTML = "yer"
            break;
        case "yer":
            natija.innerHTML = "earth"
            break;
        // 100
        case "world":
            natija.innerHTML = "dunyo"
            break;
        case "dunyo":
            natija.innerHTML = "world"
            break;






    }

}

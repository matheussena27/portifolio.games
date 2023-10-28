import turtle

#Interface do jogo
sz = turtle.Screen()
sc = turtle.Screen()
sc.title("Jogo Pong")
sc.bgpic('soccer-field-7556082_1280.png')
sc.bgcolor("black")
sc.setup(width=1280, height=800)
primeiro= turtle.textinput("Jogadores", "Nome do primeiro jogador")
segundo= turtle.textinput("Jogadores", "Nome do segundo jogador")

#Aparencia da raquete
left_pad = turtle.Turtle()
left_pad.speed(10)
left_pad.shape("square")
left_pad.color("white")
left_pad.shapesize(stretch_wid=6, stretch_len=2)
left_pad.penup()
left_pad.goto(-400, 0)

#Aparecia da requete
right_pad = turtle.Turtle()
right_pad.speed(10)
right_pad.shape("square")
right_pad.color("white")
right_pad.shapesize(stretch_wid=6, stretch_len=2)
right_pad.penup()
right_pad.goto(400, 0)

#Aparencia da bolinha
hit_ball = turtle.Turtle()
hit_ball.speed(10)
hit_ball.shape("circle")
hit_ball.color("black")
hit_ball.penup()
hit_ball.goto(0, 0)
hit_ball.dx = 5
hit_ball.dy = -5

left_player = 0
right_player = 0
Tempo= 0
rodadas= 0
media=0

#Placar e nome do jogador
sketch = turtle.Turtle()
sketch.speed(0)
sketch.color("white")
sketch.penup()
sketch.hideturtle()
sketch.goto(0, 260)
ws = turtle.Screen()
sketch.write("  {}:   {}                        {}:   {}".format(primeiro,left_player,segundo, right_player), align="center",
                font=("Constantia", 24, "normal"))

#Subir a raquete
def paddleaup():
    y = left_pad.ycor()
    y += 20
    left_pad.sety(y)

#Descer a raquete
def paddleadown():
    y = left_pad.ycor()
    y -= 20
    left_pad.sety(y)

#Subir a raquete
def paddlebup():
    y = right_pad.ycor()
    y += 20
    right_pad.sety(y)

#Descer a raquete
def paddlebdown():
    y = right_pad.ycor()
    y -= 20
    right_pad.sety(y)

#Teclas do jogo
sc.listen()
sc.onkeypress(paddleaup, "w")
sc.onkeypress(paddleadown, "s")
sc.onkeypress(paddlebup, "Up")
sc.onkeypress(paddlebdown, "Down")

#Movimento após contato da bola com a raquete
while True:
        sc.update()
        hit_ball.setx(hit_ball.xcor() + hit_ball.dx)
        hit_ball.sety(hit_ball.ycor() + hit_ball.dy)
        if hit_ball.ycor() > 280:
            hit_ball.sety(280)
            hit_ball.dy *= -1

        if hit_ball.ycor() < -280:
            hit_ball.sety(-280)
            hit_ball.dy *= -1

        if hit_ball.xcor() > 500:
            hit_ball.goto(0, 0)
            hit_ball.dy *= -1
            left_player += 1
            pontuacao +=1
            sketch.clear()
            sketch.write("  {}:   {}                        {}:   {}".format(primeiro, left_player, segundo, right_player),align="center",font=("Constantia", 24, "normal"))

        if hit_ball.xcor() < -500:
            hit_ball.goto(0, 0)
            hit_ball.dy *= -1
            right_player += 1
            pontuacao +=1
            sketch.clear()
            sketch.write("  {}:   {}                        {}:   {}".format(primeiro, left_player, segundo, right_player),align="center",font=("Constantia", 24, "normal"))

        if (hit_ball.xcor() > 360 and hit_ball.xcor() < 370) and (hit_ball.ycor() < right_pad.ycor() + 40 and
            hit_ball.ycor() > right_pad.ycor() - 40):
            hit_ball.setx(360)
            hit_ball.dx *= -1

        if (hit_ball.xcor() < -360 and hit_ball.xcor() > -370) and (hit_ball.ycor() < left_pad.ycor() + 40 and
            hit_ball.ycor() > left_pad.ycor() - 40):
            hit_ball.setx(-360)
            hit_ball.dx *= -1

    #Limite do placar e media de pontuação
        if left_player>=3:
            primeiro = turtle.textinput("Jogadores", "O JOGADOR {} VENCEU!!!!  \nA média de pontuação do jogador foi de {} por rodada".format(primeiro, 3/rodadas))
            turtle.mainloop()
        elif right_player>=3:
            segundo= turtle.textinput("Jogadores", "O JOGADOR {} VENCEU!!!!   \nA média de pontuação do jogador foi de {} por rodada".format(segundo, 3/rodadas))
            turtle.mainloop()



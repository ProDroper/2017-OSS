import pygame

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

pygame.init()

screen = pygame.display.set_mode([800, 600])

pygame.display.set_caption('CMSC 150 is cool')

clock = pygame.time.Clock()

background_position = [0, 0]

background_image = pygame.image.load("background.png").convert()
player_image = pygame.image.load("player.png").convert()
player_image.set_colorkey(BLACK)

done = False

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
    screen.blit(background_image, background_position)
    player_position = pygame.mouse.get_pos()
    x = player_position[0]-25
    y = player_position[1]-25
    screen.blit(player_image, [x, y])
    pygame.display.flip()
    clock.tick(60)

pygame.quit()

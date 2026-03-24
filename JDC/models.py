from django.db import models
from django.contrib.auth.models import User
import shortuuid
from django.conf import settings

from django.db import models
from django.contrib.auth.models import User


class Treinos(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='treinos'
    )
    nome = models.CharField(max_length=100, blank=True, null=True)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome or f"Treino de {self.user.username}"


class DiaTreino(models.Model):
    DIAS_DA_SEMANA = [
        (1, 'Segunda'),
        (2, 'Terça'),
        (3, 'Quarta'),
        (4, 'Quinta'),
        (5, 'Sexta'),
        (6, 'Sábado'),
        (7, 'Domingo'),
    ]

    treino = models.ForeignKey(
        Treinos,
        on_delete=models.CASCADE,
        related_name='dias'
    )
    dia_da_semana = models.PositiveSmallIntegerField(choices=DIAS_DA_SEMANA)

    class Meta:
        ordering = ['dia_da_semana']
        unique_together = ('treino', 'dia_da_semana')

    def __str__(self):
        return f"{self.get_dia_da_semana_display()} - {self.treino}"


class GrupoMuscular(models.Model):
    dia = models.ForeignKey(
        DiaTreino,
        on_delete=models.CASCADE,
        related_name='grupos'
    )
    nome = models.CharField(max_length=100)
    ordem = models.PositiveSmallIntegerField(default=1)

    class Meta:
        ordering = ['ordem']
        unique_together = ('dia', 'ordem')

    def __str__(self):
        return f"{self.nome} - {self.dia}"


class Exercicio(models.Model):
    grupo = models.ForeignKey(
        GrupoMuscular,
        on_delete=models.CASCADE,
        related_name='exercicios'
    )
    nome = models.CharField(max_length=100)
    ordem = models.PositiveSmallIntegerField(default=1)

    class Meta:
        ordering = ['ordem']
        unique_together = ('grupo', 'ordem')

    def __str__(self):
        return f"{self.nome} - {self.grupo.nome}"
    

class Alimentacao(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='diet')

    day_of_week = models.CharField(max_length=10,null=True, choices=[
        ('Segunda', 'Segunda'),
        
    ])

    peqno_almoço = models.CharField(max_length=100,null=True)
    almoço = models.CharField(max_length=100,null=True)
    lanche = models.CharField(max_length=100,null=True)
    jantar = models.CharField(max_length=100,null=True)


    

    day_of_week1 = models.CharField(max_length=10,null=True, choices=[
        ('Terça', 'Terça'),
        
    ])

    peqno_almoço1 = models.CharField(max_length=100,null=True)
    almoço1 = models.CharField(max_length=100,null=True)
    lanche1 = models.CharField(max_length=100,null=True)
    jantar1 = models.CharField(max_length=100,null=True)


  

    day_of_week2 = models.CharField(max_length=10,null=True, choices=[
        ('Quarta', 'Quarta'),
        
    ])

    peqno_almoço2 = models.CharField(max_length=100,null=True)
    almoço2 = models.CharField(max_length=100,null=True)
    lanche2 = models.CharField(max_length=100,null=True)
    jantar2 = models.CharField(max_length=100,null=True)


   

    day_of_week3 = models.CharField(max_length=10,null=True, choices=[
        ('Quinta', 'Quinta'),
        
    ])

    peqno_almoço3 = models.CharField(max_length=100,null=True)
    almoço3 = models.CharField(max_length=100,null=True)
    lanche3 = models.CharField(max_length=100,null=True)
    jantar3 = models.CharField(max_length=100,null=True)



    day_of_week4 = models.CharField(max_length=10,null=True, choices=[
        ('Sexta', 'Sexta'),
        
    ])

    peqno_almoço4 = models.CharField(max_length=100,null=True)
    almoço4 = models.CharField(max_length=100,null=True)
    lanche4 = models.CharField(max_length=100,null=True)
    jantar4 = models.CharField(max_length=100,null=True)



    day_of_week5 = models.CharField(max_length=10,null=True, choices=[
        ('Sabado', 'Sabado'),
        
    ])

    peqno_almoço5 = models.CharField(max_length=100,null=True)
    almoço5 = models.CharField(max_length=100,null=True)
    lanche5 = models.CharField(max_length=100,null=True)
    jantar5 = models.CharField(max_length=100,null=True)



    day_of_week6 = models.CharField(max_length=10,null=True, choices=[
        ('Domingo', 'Domingo'),
        
    ])

    peqno_almoço6 = models.CharField(max_length=100,null=True)
    almoço6 = models.CharField(max_length=100,null=True)
    lanche6 = models.CharField(max_length=100,null=True)
    jantar6 = models.CharField(max_length=100,null=True)

    def __str__(self):
        return str(self.user)
    


"""
Anamnese: para saber a média do cunsumo cálorico diário!! 
"""

class Anamnése(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='calories')
    Idade = models.IntegerField()
    Género = models.CharField(max_length=10,null=True, choices=[
        ('Masculino', 'Masculino'),
        ('Feminino', 'Feminino'),  
    ])

    Trabalho = models.CharField(max_length=10,null=True, choices=[
        ('Sentado', 'Sentado'),
        ('Físico', 'Físico'),  
    ])

    Horas_de_Trabalho = models.IntegerField()

    Prt_actividade_fis = models.CharField(max_length=10,null=True, choices=[
        ('Sim', 'Sim'),
        ('Não', 'Não'),  
    ])

    Peso = models.IntegerField()


    Percetual_de_gordura = models.IntegerField(null=True)

    Gordura_visceral = models.IntegerField(null=True)

    Altura = models.IntegerField(null=True)

    Objectivo = models.CharField(max_length=10,null=True, choices=[
        ('Ganhar', 'Ganhar'),
        ('Perder', 'Perder'),  
        ('Manter', 'Manter'),  
    ])

    def __str__(self):
        return str(self.user)
    



"""
Users profile set!! 
"""


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='avatars/', null=True, blank=True)
    displayname = models.CharField(max_length=20, null=True, blank=True)
    info = models.TextField(null=True, blank=True) 
    
    def __str__(self):
        return str(self.user)
    
    @property
    def name(self):
        if self.displayname:
            return self.displayname
        return self.user.username 
    
    @property
    def avatar(self):
        if self.image:
            return self.image.url
        return f'{settings.STATIC_URL}images/avatar.svg'




"""
Chat users!! 
"""

class ChatGroup(models.Model):
    group_name = models.CharField(max_length=128, unique=True, default=shortuuid.uuid)
    users_online = models.ManyToManyField(User, related_name='online_in_groups', blank=True)
    members = models.ManyToManyField(User, related_name='chat_groups', blank= True)
    is_private = models.BooleanField(default=False)

    def __str__(self):
        return self.group_name
    


class GroupMessage(models.Model):
    group = models.ForeignKey(ChatGroup, related_name='chat_messages', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.CharField(max_length=300, blank=True, null=True)
    file = models.FileField(upload_to='files/',blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.author.username} : {self.body}'
    
    class Meta:
        ordering = ['-created']





class Video(models.Model):
    title = models.CharField(max_length=255)
    video_file = models.FileField(upload_to='videos/', blank=True, null=True)
    video_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

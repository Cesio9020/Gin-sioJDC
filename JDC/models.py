from django.db import models
from django.contrib.auth.models import User
import shortuuid

class Treinos(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='books')

    day_of_week = models.CharField(max_length=10,null=True, choices=[
        ('Segunda', 'Segunda'),
        
    ])

    Musculo1 = models.CharField(max_length=100,null=True)
    exercicio1 = models.CharField(max_length=100,null=True)
    exercicio2 = models.CharField(max_length=100,null=True)
    exercicio3 = models.CharField(max_length=100,null=True)
    Musculo2 = models.CharField(max_length=100,null=True)
    exercicio4 = models.CharField(max_length=100,null=True)
    exercicio5 = models.CharField(max_length=100,null=True)
    exercicio6 = models.CharField(max_length=100,null=True)
    Musculo3 = models.CharField(max_length=100,null=True)
    exercicio7 = models.CharField(max_length=100,null=True)
    exercicio8 = models.CharField(max_length=100,null=True)
    exercicio9 = models.CharField(max_length=100,null=True)

    day_of_week2 = models.CharField(max_length=10,null=True, choices=[
        ('Terça', 'Terça'),
        
    ])
    Musculo4 = models.CharField(max_length=100,null=True)
    exercicio01 = models.CharField(max_length=100,null=True)
    exercicio02 = models.CharField(max_length=100,null=True)
    exercicio03 = models.CharField(max_length=100,null=True)
    Musculo5 = models.CharField(max_length=100,null=True)
    exercicio04 = models.CharField(max_length=100,null=True)
    exercicio05 = models.CharField(max_length=100,null=True)
    exercicio06 = models.CharField(max_length=100,null=True)
    Musculo6 = models.CharField(max_length=100,null=True)
    exercicio07 = models.CharField(max_length=100,null=True)
    exercicio08 = models.CharField(max_length=100,null=True)
    exercicio09 = models.CharField(max_length=100,null=True)


    day_of_week3 = models.CharField(max_length=10,null=True, choices=[
        ('Quarta', 'Quarta'),
        
    ])
    Musculo7 = models.CharField(max_length=100,null=True)
    exercicio001 = models.CharField(max_length=100,null=True)
    exercicio002 = models.CharField(max_length=100,null=True)
    exercicio003 = models.CharField(max_length=100,null=True)
    Musculo8 = models.CharField(max_length=100,null=True)
    exercicio004 = models.CharField(max_length=100,null=True)
    exercicio005 = models.CharField(max_length=100,null=True)
    exercicio006 = models.CharField(max_length=100,null=True)
    Musculo9 = models.CharField(max_length=100,null=True)
    exercicio007 = models.CharField(max_length=100,null=True)
    exercicio008 = models.CharField(max_length=100,null=True)
    exercicio009 = models.CharField(max_length=100,null=True)


    day_of_week4 = models.CharField(max_length=10,null=True, choices=[
        ('Quinta', 'Quinta'),
        
    ])

    Musculo01 = models.CharField(max_length=100,null=True)
    exercicio0001 = models.CharField(max_length=100,null=True)
    exercicio0002 = models.CharField(max_length=100,null=True)
    exercicio0003 = models.CharField(max_length=100,null=True)
    Musculo02 = models.CharField(max_length=100,null=True)
    exercicio0004 = models.CharField(max_length=100,null=True)
    exercicio0005 = models.CharField(max_length=100,null=True)
    exercicio0006 = models.CharField(max_length=100,null=True)
    Musculo03 = models.CharField(max_length=100,null=True)
    exercicio0007 = models.CharField(max_length=100,null=True)
    exercicio0008 = models.CharField(max_length=100,null=True)
    exercicio0009 = models.CharField(max_length=100,null=True)



    day_of_week5 = models.CharField(max_length=10,null=True, choices=[
        ('Sexta', 'Sexta'),
        
    ])


    Musculo04 = models.CharField(max_length=100,null=True)
    exercicio00001 = models.CharField(max_length=100,null=True)
    exercicio00002 = models.CharField(max_length=100,null=True)
    exercicio00003 = models.CharField(max_length=100,null=True)
    Musculo05 = models.CharField(max_length=100,null=True)
    exercicio00004 = models.CharField(max_length=100,null=True)
    exercicio00005 = models.CharField(max_length=100,null=True)
    exercicio00006 = models.CharField(max_length=100,null=True)
    Musculo06 = models.CharField(max_length=100,null=True)
    exercicio00007 = models.CharField(max_length=100,null=True)
    exercicio00008 = models.CharField(max_length=100,null=True)
    exercicio00009 = models.CharField(max_length=100,null=True)


    day_of_week6 = models.CharField(max_length=10,null=True, choices=[
        ('Sábado', 'Sábado'),
        
    ])


    Musculo07 = models.CharField(max_length=100,null=True)
    exercicio000001 = models.CharField(max_length=100,null=True)
    exercicio000002 = models.CharField(max_length=100,null=True)
    exercicio000003 = models.CharField(max_length=100,null=True)
    Musculo08 = models.CharField(max_length=100,null=True)
    exercicio000004 = models.CharField(max_length=100,null=True)
    exercicio000005 = models.CharField(max_length=100,null=True)
    exercicio000006 = models.CharField(max_length=100,null=True)
    Musculo09 = models.CharField(max_length=100,null=True)
    exercicio000007 = models.CharField(max_length=100,null=True)
    exercicio000008 = models.CharField(max_length=100,null=True)
    exercicio000009 = models.CharField(max_length=100,null=True)

    day_of_week7 = models.CharField(max_length=10,null=True, choices=[
        ('Domingo', 'Domingo')

        
    ])

    Musculo001 = models.CharField(max_length=100,null=True)
    exercicio0000001 = models.CharField(max_length=100,null=True)
    exercicio0000002 = models.CharField(max_length=100,null=True)
    exercicio0000003 = models.CharField(max_length=100,null=True)
    Musculo002 = models.CharField(max_length=100,null=True)
    exercicio0000004 = models.CharField(max_length=100,null=True)
    exercicio0000005 = models.CharField(max_length=100,null=True)
    exercicio0000006 = models.CharField(max_length=100,null=True)
    Musculo003 = models.CharField(max_length=100,null=True)
    exercicio0000007 = models.CharField(max_length=100,null=True)
    exercicio0000008 = models.CharField(max_length=100,null=True)
    exercicio0000009 = models.CharField(max_length=100,null=True)


    def __str__(self):
        return str(self.user)
    



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


from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

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

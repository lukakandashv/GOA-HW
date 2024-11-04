class Tag(models.Model):
    pics = models.ManyToManyField(Picture)
    name = models.CharField(max_length=30)

# Hurray, Tag exists now

class Picture(models.Model):
    name = models.CharField(max_length=100)
    pub_date = models.DateTimeField('date published')

    # Therefore, this next line will work

    tags = models.ManyToManyField(Tag)
    owner = models.ForeignKey(User)
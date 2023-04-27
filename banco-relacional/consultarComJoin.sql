select e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
    from estados e, cidades c
where e.id = c.estado_id;

select
     c.nome as Cidade,
     e.nome as Estado,
     regiao as Região
from estados e 
INNER JOIN cidades c on e.id = c.estado_id  -- o INNER so traz os dados caso a chave primaria e a estrangeira tiver alguma relação.
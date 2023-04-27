SELECT
    regiao as 'Região',
    sum(populacao) as Total
from estados
GROUP BY regiao
ORDER BY Total DESC

SELECT
    avg(populacao) as Total -- 'avg' mostra a média
from estados
O sistema deverar usar ECS (Elastic Container Service), ELB(Elastic Load Balancer).

Com o ECS será possivel dimensionar automaticamente o número de instâncias do contêiner com base na demanda de tráfego ou carga de trabalho. Isso garante que a aplicação tenha recursos suficientes disponíveis para lidar com picos de tráfego sem ficar sobrecarregada.

O ECS é integrado ao ELB, o que permite distribuir o tráfego entre várias instâncias de contêineres. Isso evita gargalos de tráfego e garante que sua aplicação mantenha um desempenho estável, mesmo em momentos de alta demanda.

O ECS permite definir limites de recursos (CPU e memória) para cada contêiner em um serviço. Isso impede que um contêiner consuma todos os recursos disponíveis e degrade o desempenho de outros contêineres na mesma instância.

Com esses 2 recursos da AWS o sistema terá otimização do serviço, com menor latencia, menor custo e maior disponibilidade.
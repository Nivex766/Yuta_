exports.ErrorBaileys401 = () => {
response = ["Você me desconectou? A sessão precisa ser escaneada novamente... Estou reiniciando!"]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_408 = () => {
response = ["A sessão sofreu um timeout, recarregando..."]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_411 = () => {
response = ["A sessão salva não bate com a conexão salva, reiniciando sua sessão..."]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_428 = () => {
response = ["A conexão fechou, sua internet pode ter caído? Tentando reconectar..."]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_440 = () => {
response = ["Existem muitas sessões do WhatsApp conectadas no meu número, feche-as..."]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_500 = () => {
response = ["Sessão esta sobrecarregada, estarei reiniciando..."]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_515 = () => {
response = ["INICIANDO A SESSÃO DO YUTA 😖"]
return response[Math.floor(Math.random() * response.length)]
}

exports.open = () => {
response = ["YutaBot-MD CONECTADO COM SUCESSO AO WHATSAPP 💌"]
return response[Math.floor(Math.random() * response.length)]
}

exports.connecting = () => {
response = ["YutaBot-MD CONECTANDO AO WHATSAPP, AGUARDE.. >_<"]
return response[Math.floor(Math.random() * response.length)]
}

exports.blackList = (GroupMetadata_, sab2) => { 
participant = sab2.participants[0].split("@")[0]
response = [`*@${participant}* foi removido do *${GroupMetadata_.subject}* por estar na lista negra...`, `Olha quem deu as caras por aqui! *@${participant}* achava que eu não ia te ver de novo bobinho(a)? 💅🏻`, `*@${participant}* achou que ia passar despercebido? Achou errado! Bye bye... 😵‍💫`, `😨 Oh my god! *@${participant}* acaba de ser banido do grupo, por estar na lista negra.`]
return response[Math.floor(Math.random() * response.length)]
}

exports.phrasesLeft = (getName, sab2, encodeURIComponent) => {
response = ["Devemos brindar pela partida dele(a)?", "Menos um nessa indústria vital...", "Nada pra ver aqui, ele saiu por 'acidente'...", `${encodeURIComponent(getName(sab2.participants[0]))} saiu do grupo...`]
return response[Math.floor(Math.random() * response.length)]
}

exports.phrasesWelcome = (mdata_2, getName, sab2, encodeURIComponent) => {
response = [`ao grupo ${encodeURIComponent(mdata_2.subject)}`, `O ${encodeURIComponent(getName(sab2.participants[0].split('@')[0]))} acaba de cair de paraquedas aqui no grupo...`, "Leia as regras e divirta-se!", "Mais um nessa indústria vital...", "Gostaria de um chá enquanto lê as regras?", "Saudações membro novo, aqui é a gerente do estabelecimento!"]
return response[Math.floor(Math.random() * response.length)]
}

exports.wait = () => {
response = [
    '*ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ǫᴜᴇ ᴊᴀ ᴇsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ ᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ 🙇‍♂️*'
]
return response[Math.floor(Math.random() * response.length)]
}

exports.onlyAdmins = () => {
response = [
    '*sᴏᴍᴇɴᴛᴇs ᴀᴅᴍs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*'
]
return response[Math.floor(Math.random() * response.length)]
}

exports.onlyOwner = () => {
response = [
    '*sᴏᴍᴇɴᴛᴇ ᴍᴇᴜs ᴅᴏɴᴏs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ!👮🏻*'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyGroup = () => {
response = ['*sᴏᴍᴇɴᴛᴇ ᴇᴍ ɢʀᴜᴘᴏs! 🙇‍♂*'   
];
return response[Math.floor(Math.random() * response.length)];
}
    
exports.onlyVipUser = () => {
response = [
    '*ᴀᴘᴇɴᴀs ᴜsᴜᴀʀɪᴏs ᴠɪᴘs 💁‍♂️*'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyBotAdmin = () => {
response = [
    '*ᴇᴜ ᴘʀᴇᴄɪsᴏ sᴇʀ ᴀᴅᴍ ᴅᴏ ɢʀᴜᴘᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyGroupFun = (prefixo) => {
response = [
    `*ᴏ ᴍᴏᴅᴏʙʀɪɴᴄᴀᴅᴇɪʀᴀ ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀʀ ᴀᴛɪᴠᴏ 🙇‍♂️*.`
  ];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyPrivate = () => {
response = [
    '🔐 Hello, o comando só está disponível para o uso em conversas privadas...',
    '😵‍💫🌟 Hello, o comando é somente liberado em conversas privadas! Mas tome cuidado ao me chamar no privado, meu dono(a) deve ter ativado o anti-pv.'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.bannedUser = () => {
response = [
    'Você infligiu uma cláusulas do meus termos e condições de uso, por isso, você está banido de usar meus comandos por tempo indeterminado...️',
    'Você está impossibilitado de usar meus comandos, ou seja, está bloqueado por tempo indeterminado até meus superiores mudar de ideia... 😭👋🏼',
    '*Meu deus!* 😱 Você deve ter deixado meu dono com muita raiva, para ele te banir mesmo de usar meus comandos...'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.teste = () => {
response = [ '`Aguarda ai...`' ]
return response[Math.floor(Math.random() * response.length)];
}

exports.forbiddenStateFromDDD = (mentionUser, whichState, extractDDD) => {
  response = [
      `⚠️ Olá @${mentionUser.split('@')[0]}, você está sendo banido(a) do grupo. Por motivo que você está com ddd proibido aqui!`, 
      `🪦 Olá @${mentionUser.split('@')[0]}, venho informar que você está sendo banido(a), por motivo que você possuí um número com o DDD de um estado proibido neste grupo.`,
      `👺 Suma daqui! Números com o DDD ${extractDDD(mentionUser.split('@')[0])} não são bem-vindos neste grupo.`,
      `😾 Ei, você e nem possuidores do DDD ${extractDDD(mentionUser.split('@')[0])} não são bem-vindos neste barzinho aqui!`
    ];
  return response[Math.floor(Math.random() * response.length)];
}

exports.errorConvertSticker = () => {
return 'Falha ao converter a mídia encaminhada, tente novamente mais tarde...';
}

exports.errorCommandLink = () => {
return '*ᴄᴇʀᴛɪғɪǫᴜᴇ-sᴇ sᴇ ᴇssᴇ ʟɪɴᴋ ᴇsᴛᴀ ᴄᴇʀᴛᴏ ɴᴏ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*';
}

exports.playResult = (ytbr) => {
  return ``
}

exports.playButtonsResult = (ytbr) => {
  return ``
}
  

exports.playVideo = (data) => {
  return `*lıl.ılı.lıll「𝐏𝐋𝐀𝐘 𝐕Í𝐃𝐄𝐎」llı.ıllı.ılı*\n      ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻
 1:35 ───ㅇ───── 3:47
   
   volυмe : ▁▂▃▄▅▆▇▉

*🎥⃟ 𝑻𝑰𝑻𝑼𝑳𝑶:* ${data.resultado[0].title}`
} 

exports.playVideo2 = (data) => {
  return `*lıl.ılı.lıll「𝐏𝐋𝐀𝐘 𝐕Í𝐃𝐄𝐎」llı.ıllı.ılı*\n       ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻
 1:35 ───ㅇ───── 3:47
   
   volυмe : ▁▂▃▄▅▆▇▉,

*🎥⃟ 𝑻𝑰𝑻𝑼𝑳𝑶:* ${data.resultado[0].title}`
} 

exports.playDocumentResult = (data) => {
  return `*lıl.ılı.lıll「𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎」llı.ıllı.ılı*\n      ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻
 1:35 ───ㅇ───── 3:47

  volυмe : ▁▂▃▄▅▆▇▉


*📄⃟ 𝑻𝑰𝑻𝑼𝑳𝑶:* ${data.resultado[0].title}`
}

exports.shz = (data) => {
  return `• Música: *${data.resultado[0].title}*\n• *Descrição:* ${data.resultado[0].description}\n• Duração: *${data.resultado[0].timestamp} - ${data.resultado[0].seconds}*\n• Link: *${data.resultado[0].url}*`
}

exports.playmixResult = (data) => {
return `*💫| Play Mix - Enviando 5 resultados de acordo com a sua pesquisa..:*\n–\n*1°* ${data.resultado[0].title}\n• *Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds} segundos.\n–\n*2°* ${data.resultado[1].title}\n• *Duração:* ${data.resultado[1].timestamp} | ${data.resultado[1].seconds} segundos.\n–\n*3°* ${data.resultado[2].title}\n• *Duração:* ${data.resultado[2].timestamp} | ${data.resultado[2].seconds} segundos.\n–\n*4°* ${data.resultado[3].title}\n• *Duração:* ${data.resultado[3].timestamp} | ${data.resultado[3].seconds} segundos.\n–\n*5°* ${data.resultado[4].title}\n• *Duração:* ${data.resultado[4].timestamp} | ${data.resultado[4].seconds} segundos.`
}

exports.syntaxDownloadMusic = () => {
return `*ᴘᴏʀ ғᴀᴠᴏʀ, ɪɴsɪʀᴀ ᴏ ᴛɪᴛᴜʟᴏ ᴅᴀ ᴍᴜsɪᴄᴀ 🙇‍♂️*`
}

exports.syntaxPlayMix = () => {
return `*ᴘᴏʀ ғᴀᴠᴏʀ, ᴄᴏʟᴏǫᴜᴇ ᴏ ɴᴏᴍᴇ ᴅᴏ ᴀʀᴛɪsᴛᴀ ǫᴜᴇ ᴠᴏᴄᴇ ǫᴜᴇʀ ᴠᴇʀ ᴏs ʀᴇsᴜʟᴛᴀᴅᴏs 🙇‍♂️*`
}

exports.InstaStalker = (data, formatNumber, formatNumberDecimal) => {
return `> 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nome: ${data.resultado.profileName|| "Usuário do Instagram"} *(@${data.resultado.username})*\n• Conta Privada? *${data.resultado.accountPrivate === true ? "Sim" : data.resultado.accountPrivate === false ? "Não" : "Não"}*\n• Conta Verificada? *${data.resultado.accountVerified === true ? "Sim" : data.resultado.accountVerified === false ? "Não" : "Não"}*\n• URL Externo: *${data.resultado.externalUrl}*\n• Postagens (Fotos & Vídeos): *${formatNumberDecimal(data.resultado.mediaCount)}*\n• Total de Seguidores: *${formatNumberDecimal(data.resultado.followersAmount)}*\n• Total de Seguidos: *${formatNumberDecimal(data.resultado.followingAmount)}*\n–\n• Biografia:\n\`\`\`${data.resultado.biography || "❌️ Sem biografia!"}\`\`\``;
}

exports.TiktokStalker = (data, formatNumberDecimal) => { 
return `> 𝐓𝐢𝐤𝐭𝐨𝐤 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nome: *${data.resultado.users.nickname}* | @${data.resultado.users.username}\n• URL: *https://tiktok.com/@${data.resultado.users.username}*\n• Conta Verificada: *${data.resultado.users.verified === true ? "Sim" : data.resultado.users.verified === false ? "Não" : "Não"}*\n• Conta Privada: *${data.resultado.users.privateAccount === true ? "Sim" : data.resultado.users.privateAccount === false ? "Não" : "Não️"}*\n• Conta Comercial: *${data.resultado.users.commerceUser === true ? "Sim" : data.resultado.users.commerceUser === false ? "Não️" : "Não️"}*\n• Região: *${data.resultado.users.region}*\n—\n• Estatísticas:\n\t• Seguidores: *${formatNumberDecimal(data.resultado.stats.followerCount)}*\n\t• Seguindo: *${data.resultado.stats.followingCount}*\n\t• Curtidas: *${formatNumberDecimal(data.resultado.stats.heartCount)}*\n\t• Vídeos Publicados: *${formatNumberDecimal(data.resultado.stats.videoCount)}*\n\t• Vídeos Curtidos: *${formatNumberDecimal(data.resultado.stats.likeCount)}*\n—\n• Biografia: \n\`\`\`${data.resultado.users.signature.replaceAll(`\n\n`, `\n`)}\`\`\``
}

exports.tiktokDownload = (data) => {
return `*Usuário:*〔 @${data.resultado.username} 〕\n–\n• *Descrição:* ${data.resultado.description}`
}

exports.soundcloud = (data, tinyUrl) => {
return `• Música: *${data.resultado.titulo}*\n• *Total de Downloads: *${data.resultado.total_downloads}*\n–\n\t• Caso o *áudio* não seja enviado, baixe através do link: ${tinyUrl.data}`
}

exports.icmsResult = (data) => {
return `📊 Estado ICMS: *${data.resultado.icms}%*\n–\n• Valor ICMS _(valor líquido/taxa)_: *R$ ${data.resultado.icmsTotal}*\n• Total BRL _(valor apresentado + valor icms, em real.)_: *R$ ${data.resultado.total}*\n• Total USD _(valor apresentado + valor icms, convertido p/dolar)_: *$ ${data.resultado.dolar}*\n–\n📌 *Observação:* O valor na remessa pode ser outro, esse cálculo é uma probabilidade de que pode ser aplicada essa taxa. Também pode variar a *alíquota* de cada estado, que é a tal coisa que está sendo encomendada.\n–\n⚠️ *Como é realizado o cálculo de um valor abaixo de R$50?*\n\tProduto × icms(seu estado) = valor_icms\n\tProduto + valor_icms = total\n–\n⚠️ *Como é realizado o cálculo de um valor acima de R$50?*\n 	 Produto + (60 + icms(seu estado)) = valor_icms\n	 Produto + valor_icms = total`
}

exports.syntaxIcms = (prefix) => {
return `*Ops!* O comando está sendo utilizado de forma errada, _por favor confira abaixo a forma correta de uso, para obter sucesso._\n–\nPara usar este comando é nescessario, usar da seguinte forma: *${prefix}icms 704|82*, _explicando sobre os valores apresentados:_\n\t• *704* ‐ O valor que você deseja saber a probabilidade da possível taxa a ser aplicada sobre o valor.\n\t• *82* - O ddd do estado onde você mora, ou o que você deseja consultar.`
}

exports.syntaxTrackParcels = (prefix) => {
return `• Coloque o código da encomenda fornecido pelo Correios, abaixo tem a *explicação e o exemplo de uso*:\n–\n⚠️ *Exemplo:* ${prefix}Rastrear [Código]\n\t• O *código de rastreamento dos Correios* serve para registrar que uma encomenda foi postada e permite localizá-la durante o processo de envio.\n\t• Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`
}

exports.invalidCodeRastrear = () => {
return `• *Código inválido ou nenhum resultado foi retornado.* Por favor informe um código válido, _verifique se você seguiu a instrução abaixo:_\n\t• Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`
}

exports.rastrearEncomenda = (dataResult, q) => {
return `📦 Rastreio de Encomendas:\n• N° de Rastreio: *${q}*\n• Última atualização: *${dataResult.resultado[0].datePost} (${dataResult.resultado[0].timeCount})*\n——\n📍 Histórico de Localização:\n` + dataResult.resultado.map((info, index) => `${index+1}. *${info.description}*\n• Postagem: *${info.timeCount} (${info.datePost})*`).join('\n–\n');
}

exports.lyrics = (data, II) => {
 return `• Título: *${data.resultado.name}*\n• Artista: *${data.resultado.byArtist.name}*\n• Descrição: *${data.resultado.description}*\n• URL: *${data.resultado.url}*\n• Letra (Original):\n${II}${data.resultado.lyricOriginal}${II}`
}

exports.result_APOD = (dataNaga, resultExp) => {
return `🔭 Título - ${dataNaga.nasa.title}\n\n🌐📝 Explicação - ${resultExp.result}`
}

exports.searchBooks = (getBook) => {
return `• Titulo: *${getBook.data.volumeInfo.title}*\n• Autor do Livro: *${getBook.data.volumeInfo.authors[0]}*\n• Publicado em: *${getBook.data.volumeInfo.publishedDate}*\n• *Publicado por:* ${getBook.data.volumeInfo.publisher}\n• Quantidade de Paginas: *${getBook.data.volumeInfo.pageCount}*\n–\n• Descrição: *${getBook.data.volumeInfo.description}*\n–\n👓 Ler: *${getBook.data.accessInfo.webReaderLink}*\n➕ Saiba mais: *${getBook.data.volumeInfo.canonicalVolumeLink}*`
}

exports.mediafireDownload = (ABC, encurt) => {
  return `*[ MediaFire ]* - Informações Arquivo:\n–\n★ *Nome do Arquivo:* ${ABC.resultado.nama}\n★ *Tamanho:* ${ABC.resultado.size}\n★ *Tipo de arquivo a ser enviado:* ${ABC.resultado.mime}\n–\n*Por favor, aguarde um pouco estou realizando o envio do arquivo.*\n\t★ Caso haver um atraso de *2min* pode ser o tamanho do arquivo a ser enviado.\n\t★ *Não enviou?* Realize o download pelo link: ${encurt.data}`
}

exports.horoscopo = (q, ABC) =>  {
return `Signo: ${q}\n${ABC.resultado.inform}`
}

exports.respostaChatGPT = (dataResulted) => {
return `${dataResulted.result}`
}

exports.respostaResumida = (dataResulted) => {
return `${dataResulted.result}`
}

exports.respostaRedacao = (dataResulted) => {
return `${dataResulted.result}`
}

exports.wikiResposta = (wikis) => {
return `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`
}

exports.googleImage = (data) => {
return `• Título: *${data.origin.title || "Não existe título na imagem."}*\n• URL: *${data.origin.website.url || "Sem URL."}* \n• Fonte: *${data.origin.website.name || "Sem informação."} _(${data.origin.website.domain || "Sem informação."})_*\n• Resolução: *${data.height || "0"} × ${data.width || "0"}*`
}

exports.aptoide = (getApk, sizeApk, lnDown) => {
return `• Nome: *${getApk.name}*\n• Pacote do aplicativo à ser enviado: *${getApk.package}*\n• Tamanho do arquivo à ser enviado por mim: *${sizeApk} MB*\n• Versão do aplicativo à ser enviada por mim: *${getApk.file.vername}*\n——\n• [📁] *Não baixou?* Clique no link abaixo e realize o processo:\n↳ ${lnDown.data}`
}

exports.memesImages = (teks) => { 
return `${teks.titulo} *ʙᴀɪxᴀᴅᴏ ᴘᴇʟᴏ ʏᴜᴛᴀ ʙᴏᴛ 🙇‍♂️*`
}

exports.iFunnyVideo = (teks) => { 
return `${teks.titulo} *ʙᴀɪxᴀᴅᴏ ᴘᴇʟᴏ ʏᴜᴛᴀ ʙᴏᴛ 🙇‍♂️*`
}

exports.translator = (bla) => {
return `*ᴛᴇxᴛᴏ ᴛʀᴀᴅᴜᴢɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*: ${bla.result}`
}

exports.smartphoneInfo = (smartInfo) => {
return `• *Smartphone:* ${smartInfo.resultado.nomeCelular}\n• *Resumo:* ${smartInfo.resultado.informações}\n–\n• *Informações técnicas sobre o Smartphone:*\n\n${smartInfo.resultado.resumoExtra}`
}

exports.clima = (wttrin) => {
return `⚠️️ Sobre o clima de agora no local.\n–\n→ *Local:* ${wttrin.nearest_area.map((j, i) => j.areaName[i].value+', '+j.region[i].value+', '+j.country[i].value).flat().join(' | ')}\n→ *Temperatura atual:* ${wttrin.current_condition.map(j => j.temp_C).flat().join(' | ')} C° - [${wttrin.current_condition.map(j => j.temp_F).flat().join(' | ')} F°]\n→ *Sensação térmica:* ${wttrin.current_condition.map(j => j.FeelsLikeC).flat().join(' | ')} C° = [${wttrin.current_condition.map(j => j.FeelsLikeF).flat().join(' | ')} F°]\n→ *Umidade do Ar / Ventos:* ${wttrin.current_condition.map(j => j.humidity).flat().join(' | ')}%\n→ *Chuva em polegadas:* ${wttrin.current_condition.map(j => j.precipInches).flat().join(' | ')} Pol - [${wttrin.current_condition.map(j => j.precipMM).flat().join(' | ')} MM]\n→ *Cobertura de nuvens:* ${wttrin.current_condition.map(j => j.cloudcover).flat().join(' | ')}%\n→ *Indice de Ultra-Violeta (UV):* ${wttrin.current_condition.map(j => j.uvIndex).flat().join(' | ')}\n→ *Nivel de visibilidade:* ${wttrin.current_condition.map(j => j.visibility).flat().join(' | ')} KM - [${wttrin.current_condition.map(j => j.visibilityMiles).flat().join(' | ')} M.]\n→ *Descrição do clima:* ${wttrin.current_condition.map(j => j.weatherDesc).flat().map(j => j.value).flat().join(', ')} - [ID #${wttrin.current_condition.map(j => j.weatherCode).flat().join(' | ')}]\n→ *Direção do vento:* ${wttrin.current_condition.map(j => j.winddir16Point).flat().join(', ')} - [${wttrin.current_condition.map(j => j.winddirDegree).flat().join(', ')}°]\n→ *Velocidade dos ventos em KM:* ${wttrin.current_condition.map(j => j.windspeedKmph).flat().join(', ')} KM - [${wttrin.current_condition.map(j => j.windspeedMiles).flat().join(', ')} M.]\n→ *Pressão do ar:* ${wttrin.current_condition.map(j => j.pressure).flat().join(' | ')} hPa - [${wttrin.current_condition.map(j => j.pressureInches).flat().join(' | ')} mmHg]\n–\n️🏘 Algumas informações do local.\n–\n→ *Tipo de requisição:* ${wttrin.request.map(j => j.type).flat().join(' | ')}\n→ *Local da requisição:* ${wttrin.request.map(j => j.query).flat().join(' | ')}\n→ *Local mais aproximado:* ${wttrin.nearest_area.map(j => j.latitude).flat().join(' | ')} Lat. | ${wttrin.nearest_area.map(j => j.longitude).flat().join(' | ')} Lon.\n→ *Total de Habitantes:* ${wttrin.nearest_area.map(j => j.population).flat().join(' | ')}\n→ *Data agora no local:* ${wttrin.current_condition.map(j => j.localObsDateTime).flat().join(', ')}\n→ *Tempo de observação:* ${wttrin.current_condition.map(j => j.observation_time).flat().join(', ')}`
}

exports.movies = (movieInfo) => {
return `• Título: *${movieInfo.data.results[0].title}* (${movieInfo.data.results[0].original_title})\n• Data de Lançamento: *${movieInfo.data.results[0].release_date}*\n• Avaliações: *${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)*\n• Popularidade do Filme (%): *${movieInfo.data.results[0].popularity.toFixed(1)}%*\n• Classificação adulta? *${movieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}*\n• Linguagem Oficial do Filme: *${movieInfo.data.results[0].original_language}*\n–\n• [🎬] *Sinopse do Filme:*\n↳ ${movieInfo.data.results[0].overview}`
}

exports.series = (serieInfo) => {
return `• Título: *${serieInfo.data.results[0].name}* (${serieInfo.data.results[0].original_name})\n• Data de Lançamento: *${serieInfo.data.results[0].first_air_date}*\n• Avaliações: *${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)*\n• Popularidade da Série (%): *${serieInfo.data.results[0].popularity.toFixed(1)}%*\n• Classificação adulta? *${serieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}*\n• Linguagem Oficial da Série: *${serieInfo.data.results[0].original_language}*\n–\n• [🌟] *Sinopse da Série:*\n↳ ${serieInfo.data.results[0].overview}`
}

exports.searchIpAdress = (ip) => {
return `*📡 Localizar + Informações ${ip.data.type}*\n–\n• *Código IP:* ${ip.data.ip}\n• *Tipo de Endereço IP:* ${ip.data.type}\n• *Província:* ${ip.data.region} / ${ip.data.city}\n• *Latitude:* ${ip.data.latitude}\n• *Longitude:* ${ip.data.longitude}\n• *Provedor Wi-Fi:* ${ip.data.isp}\n*Continente:* ${ip.data.continent} - ${ip.data.continent_code}\n• *País:* ${ip.data.country} - *DDI:* ${ip.data.country_phone}\n• *Sigla:* ${ip.data.country_code} - *Capital:* ${ip.data.country_capital}\n• *Fuso Horário:* ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n• *Moeda do País:* ${ip.data.currency} - ${ip.data.currency_code}`
}

exports.searchCep = (res) => {
return `🏠 *Consulta CEP:*\n–\n*Número informado:* ${res.cep}\n• *Logradouro:* ${res.street}\n• *Complemento:* Não encontrado.\n• *Código do DDD:* ${res.ddd}\n• *Bairro:* ${res.neighborhood}\n• *Cidade/Estado:* ${res.city} - ${res.state}\n• *Código do IBGE:* ${res.ibge}\n• *Código do Siafi:* ${res.siafi}`
}

exports.noresult = () => {
return `*ᴅᴇsᴄᴜʟᴘᴇ, ᴍᴀs ɴᴀᴏ ᴅᴇᴜ ᴘʀᴀ ʙᴜsᴄᴀʀ ᴏ ǫᴜᴇ ᴠᴏᴄᴇ ǫᴜᴇʀɪᴀ....🙇‍♂️*`;
}

exports.warningAdvertencia = (menc_os2, dfqn) => {
return `*ᴏʟᴀ @${menc_os2.split("@")[0]} - ᴠᴏᴄᴇ ғᴏɪ ᴀᴅᴠᴇʀᴛɪᴅᴏ ${dfqn}/3, ᴄᴀsᴏ ᴛᴏᴍᴇ ᴀ 3 ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ, ᴠᴏᴄᴇ sᴇʀᴀ ʀᴇᴍᴏᴠɪᴅᴏ! 🙇‍♂️*`
}

exports.finishAdvertencia = (menc_os2) => {
return `*ʙʏᴇ ʙʏᴇ @${menc_os2.split("@")[0]} - ᴠᴏᴄᴇ ᴀᴄᴀʙᴀ ᴅᴇ ᴛᴏᴍᴀʀ ᴀ 3 ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ, ᴇsᴘᴇʀᴏ ǫᴜᴇ ᴀᴘʀᴇɴᴅᴀ ᴄᴏᴍ ᴏs sᴇᴜs ᴇʀʀᴏs 👨‍💻*`
}

exports.syntaxAnonymousMail = (prefix) => {
return `*• ᴇxᴇᴍᴘʟᴏ: *${prefix}correio +5591.../ᴍᴇ ɴᴀᴍᴏʀᴀ 🌹.....*`
}

exports.anonymousMail = (txt2) => {
return `📪 ᴠᴏᴄᴇ ʀᴇᴄᴇʙᴇᴜ ᴜᴍᴀ ᴍsɢ ᴅᴏ ᴄᴏʀʀᴇɪᴏ ᴅᴏ ᴀɴᴏɴɪɴᴏ\n–\nǫᴜᴇᴍ ᴛᴇ ᴇɴᴠɪᴏᴜ? *ᴅᴇsᴄᴏɴʜᴇᴄɪᴅᴏ 🧏‍♂️*\n–\n`+"```"+txt2+"```"
}

exports.sucessAnonymousMail = () => {
return `*sᴇᴜ ᴄᴏʀʀᴇɪᴏ ғᴏɪ ᴇɴᴠɪᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🌸*`
}

exports.unbannedMessage = (blcp) => {
return `*@${blcp.split('@')[0]} ғᴏɪ ᴅᴇsʙᴀɴɪᴅᴏ, ᴀɢᴏʀᴀ ᴘᴏᴅᴇ ᴜsᴀʀ ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴏ ʙᴏᴛ 🙆‍♂️*`
}

exports.bannedMessage = (blcp) => {
return `*@${blcp.split('@')[0]} ғᴏɪ ʙᴀɴɪᴅᴏ, ᴇɴᴛᴀᴏ ɴᴀᴏ ᴘᴏᴅᴇʀᴀ ᴜsᴀʀ ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴏ ʙᴏᴛ 🙇‍♂️*`
}

exports.errorUploadImage = () => {
return `*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴍɪɴɪᴍᴏ ᴅᴏ ᴠɪᴅᴇᴏ ᴅᴇᴠᴇ sᴇʀ ᴅᴇ 30 sᴇɢᴜɴᴅᴏs 🙇‍♂️*`
}

exports.noArgsSearch = () => {
return `*ᴄᴏᴍᴏ ᴅᴇsᴇᴊᴀ ғᴀᴢᴇʀ ᴜᴍᴀ ᴘᴇsǫᴜɪsᴀ sᴇᴍ ᴄᴏɴᴛᴇʀ ᴀʟɢᴜᴍ ᴛɪᴛᴜʟᴏ ᴏᴜ ᴀʀɢᴜᴍᴇɴᴛᴏ? 💁‍♂️*`
}

exports.syntaxLogos = () => {
return `*ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ᴘʀᴀ ᴍɪᴍ ғᴀᴢᴇʀ ᴀ ʟᴏɢᴏ? 💁‍♂️*`
}

exports.playmixError = (n) => {
return `*ᴅᴇsᴄᴜʟᴘᴇ, ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴠɪᴀʀ ᴏ ${n}° ᴀᴜᴅɪᴏ...*`
}

exports.quoteCurrencies = (response) => {
return `*[COTAÇÃO]* - Os dados informados são atualizados 24h por dia: 🗣💰\n–\n• Moeda: *${response.name}*\n• Valor da moeda mais alto em 24 horas: *R$ ${Number(reponse.high).toFixed(2)}*\n• Valor da moeda mais baixo em 24 horas: *R$ ${Number(repose.low).toFixed(2)}*\n• Valor da moeda atualizado agora no momento: *R$ ${Number(resposta.bid).toFixed(2)}*`
}

exports.syntaxWebSticker = (prefix) => {
    return `🤖 *Como usar o comando 'figuweb'?*\n• *Função:* Criar uma figurinha com texto personalizado e fundo colorido.\n——\n• *Sintaxe do Comando:*\n\t- ${prefix}figuweb [texto]/[número da cor]\n• *Escolhendo a Cor de Fundo:*\n\t- Você pode escolher entre 4 cores diferentes para o fundo da sua figurinha. Basta adicionar o número correspondente à cor desejada após o texto, separado por uma barra (/).\n—\n• *Numerações das cores dos fundos da figurinha de texto:*\n\t- 1. Preto (Padrão), 2. Branco, 3. Vermelho, 4. Azul\n—\n• *Exemplos de usos:*\n \t- ${prefix}figuweb Olá, como vai?/1 (Fundo na cor Preto)\n\t- ${prefix}figuweb Bom dia!/2 (Fundo na cor Branco)\n\t- ${prefix}figuweb Boa tarde!/3 (Fundo na cor Vermelho)\n\t- ${prefix}figuweb Boa noite!/4 (Fundo na cor Azul)\n—\n• Se você não especificar uma cor, o fundo padrão (Preto) será usado.`
}

exports.groupInvitation = (sender, cnvt, prefix) => {
return `*[SOLICITAÇÃO]* - Foi enviado um convite para o bot entrar em um grupo.\n–\n⚙️ *Informações:*\n      • Número: *wa.me/${sender.split("@")[0]}*\n      • Link: *${cnvt}*\n–\n📑 *Como aceitar ou recusar o pedido?*\n      • Para aceitar o pedido é nescessario você usar o comando: ${prefix}entrar e o link do grupo do(a) solicitante.\n          Ex: *${prefix}entrar ${cnvt}*\n      • *Recusar o pedido é fácil!* Mas lembrando ele só serve para notificar o usuário que o pedido foi recusado.\n          Ex: *${prefix}recusar ${sender.split("@")[0]}*`
}

exports.thinkingPrefix = (pushname, prefix) => {
return `ᴏʟᴀ ${pushname}, ᴀǫᴜɪ ᴇsᴛᴀ ᴏ ᴍᴇᴜ ᴘʀᴇғɪxᴏ: ${prefix}`
}

exports.chamandoBot = (pushname, tempo) => {
const response = [
 `*ᴏʟᴀ ${pushname}, ᴏ ǫᴜᴇ ᴠᴏᴄᴇ ᴅᴇsᴇᴊᴀs? 🧏‍♂️*`, 
 `*ᴏᴘᴀ ᴀᴍɪɢᴏ(ᴀ), ᴇᴍ ǫᴜᴇ ᴘᴏssᴏ ᴀᴊᴜᴅᴀʀ? 🙇‍♂️*`,
 `${tempo} ${pushname}, *ᴄᴏᴍᴏ ᴘᴏssᴏ ᴛᴇ ᴀᴊᴜᴅᴀʀ ʜᴏᴊᴇ?💁‍♂️*`,
 `*ᴘᴏʀ ǫᴜᴀʟ ᴍᴏᴛɪᴠᴏ ᴠᴏᴄᴇ ᴍᴇ ᴄʜᴀᴍᴀs? 🤓*`
] 
buffer = response[Math.floor(Math.random() * response.length)]
return buffer 
}

exports.removeUserAntiPlvr = () => {
return `*「 ʀᴇᴍᴏᴠɪᴅᴏ(ᴀ) ᴘᴏʀ ᴜsᴀʀ ᴘᴀʟᴀᴠʀᴀs ᴘʀᴏɪʙɪᴅᴀ. 」*\n*ᴠᴏᴄᴇ sᴇʀᴀ ʙᴀɴɪᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ, ɴᴀ ᴘʀᴏxɪᴍᴀ ᴏʟʜᴇ ᴀs ʀᴇɢʀᴀs ᴅᴏ ɢʀᴜᴘᴏ! 😠*`
}

exports.permissionDenied_rUser = () => {
return `*ᴇᴜ ᴘʀᴇᴄɪsᴏ ᴅᴇ ᴀᴅᴍ ᴘʀᴀ ᴇғᴇᴛᴜᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*`
}

exports.antisRandomMessage = () => {
return `*ᴜᴍᴀs ᴅᴇssᴀs ᴏᴘᴄᴏᴇs ᴇsᴛᴀ ᴀᴛɪᴠᴀᴅᴏ, ᴍᴀs ᴄᴏᴍᴏ ᴠᴏᴄᴇ ᴇ ᴀᴅᴍ ɴᴀᴏ ɪʀᴇɪ ʀᴇᴍᴏᴠᴇʀ. _(ᴀɴᴛɪ ᴄᴏɴᴛᴀᴛᴏ - ᴀɴᴛɪ ᴄᴀᴛᴀʟᴏɢᴏ - ᴀɴᴛɪ ʟᴏᴄᴀʟɪᴢᴀᴄᴀᴏ)_*`
}

exports.charactersAnti = () => {
return `*ᴍᴜɪᴛᴏs ᴄᴀʀᴀᴄᴛᴇʀs ᴇɴᴠɪᴀᴅᴏs ʀᴇᴄᴇɴᴛᴇᴍᴇɴᴛᴇ, ɪʀᴇɪ ʟʜᴇ ʀᴇᴍᴏᴠᴇʀ ᴘᴏʀ sᴇɢᴜʀᴀɴᴄᴀ 🙇‍♂️*`
}

exports.markingAllMember = () => {
return `*ᴍᴇᴍʙʀᴏ ᴄᴏᴍᴜᴍ ᴍᴀʀᴄᴀɴᴅᴏ ɢᴇʀᴀʟ? ɪʀᴇɪ ʀᴇᴍᴏᴠᴇʀ ᴀɢᴏʀᴀ 😠*`
}

exports.absenceRecordOwner = (NickDono, tabelin) => {
return `*✨ ᴏ ᴍᴇᴜ ᴅᴏɴᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴀᴜsᴇɴᴛᴇ ɴᴏ ᴍᴏᴍᴇɴᴛᴏ ✨*

 *⚡ᴅᴏɴᴏ: ${NickDono} ⚡*

*⏰ ᴀᴜsᴇɴᴛᴇ ᴅᴇsᴅᴇ: ${tabelin.Ausente_Desde} ⏰*

> 🪀 ᴍᴏᴛɪᴠᴏ ᴅᴀ ᴀᴜsᴇɴᴄɪᴀ: ${tabelin.Motivo_Da_Ausência}`
}

exports.absenceRecordAdmin = (blak, tabelin) => {
return `*✨ ᴏ ᴀᴅᴍɪɴ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴀᴜsᴇɴᴛᴇ ɴᴏ ᴍᴏᴍᴇɴᴛᴏ ✨*

 *⚡ᴀᴅᴍ: @${blak.id.split("@")[0]} ⚡*

> 🪀 ᴍᴏᴛɪᴠᴏ ᴅᴀ ᴀᴜsᴇɴᴄɪᴀ: ${blak.msg}`
}

exports.floodCommands = () => {
return `*sᴇᴍ ғʟᴏᴏᴅs ᴀǫᴜɪ ʀᴀᴘᴀ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ᴘᴀʀᴀ ᴇғᴇᴛᴜᴀʀ ᴏ ᴘʀᴏxɪᴍᴏ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*`
}

exports.timeRequired = () => {
return `*ɴᴀᴏ ᴇ ᴘᴏssɪᴠᴇʟ ᴇɴᴠɪᴀʀ ᴀᴜᴅɪᴏ ᴏᴜ ᴠɪᴅᴇᴏ ᴄᴏᴍ ᴍᴀɪs ᴅᴇ 20 ᴍɪɴᴜᴛᴏs, ᴛᴀ ᴀᴄʜᴀɴᴅᴏ ǫᴜᴇ ᴇɴᴛʀᴇɢᴏ ᴘᴏᴅᴄᴀsᴛ?🙇‍♂️*`
}

exports.error = () => {
return `*ᴅᴇsᴄᴜʟᴘᴇ, ᴍᴀs ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*`
}

exports.messageProhibitedDetAdmin = () => {
return `*ᴍᴇɴsᴀɢᴇᴍ ᴘʀᴏɪʙɪᴅᴀ ᴅᴇᴛᴇᴄᴛᴀᴅᴀ, ᴘᴏʀᴇᴍ ᴏ ᴜsᴜᴀʀɪᴏ ᴇ ᴀᴅᴍ 🙇‍♂️*`
}

exports.messageProhibitedDetUser = () => {
return `*ᴍᴇɴsᴀɢᴇᴍ ᴘʀᴏɪʙɪᴅᴀ ᴅᴇᴛᴇᴄᴛᴀᴅᴀ! ɪʀᴇɪ ʀᴇᴍᴏᴠᴇʀ ɪᴍᴇᴅɪᴀᴛᴀᴍᴇɴᴛᴇ. 🙇‍♂️*`
}

exports.antiCalls = () => {
return `*ʟɪɢᴀɴᴅᴏ ᴘʀᴏ ʙᴏᴛ? ɪʀᴇɪ ᴛᴇ ʙʟᴏǫᴜᴇᴀʀ sᴇᴜ ᴄᴀʀᴇɴᴛᴇ 🙇‍♂️*`
}

exports.helpGroupSettings = (prefix, sender) => {
return `🤠 Olá administrador(a) *@${sender.split("@")[0]}*! Tudo bem?\n- Seja bem vindo(a), ao menu de ajuda do comando *'grupo'*:\n–\n1. _${prefix}grupo_ *-open* _→_ Permite o envio das mensagens por todos os participantes do grupo.\n\n2. _${prefix}grupo_ *-close* _→_ Permite o envio de mensagens apenas somente para administradores do grupo.\n\n3. _${prefix}grupo_ *-livre* _→_ Permite a todos os integrantes que editem os dados.\n\n4. _${prefix}grupo_ *-private* _→_ Só irá permitir que as alterações nos dados do grupo, sejam alteradas somente por administradores do mesmo.`
}

exports.helpPhotoPrivacy = (prefix, sender) => {
return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n- Seja bem vindo(a), ao menu de ajuda do comando *'wprivacyph'*:\n–\n1. _${prefix}wprivacyph_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, vejam a foto de perfil.\n\n2. _${prefix}wprivacyph_ *-all* _→_ Permite que todos vejam a foto de perfil do bot.\n\n3. _${prefix}wprivacyph_ *-noall* _→_ Ninguém irá ver a foto de perfil colocada no bot, ou seja, até o proprietário está restrito(oculto) de ver.\n–\n📍 *Função:* O comando tem a função de alterar a privacidade da foto de perfil, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações.`
}

exports.helpGroupPrivacy = (prefix, sender) => {
return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n- Seja bem vindo(a), ao menu de ajuda do comando *'wprivacygp'*:\n–\n1. _${prefix}wprivacygp_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, adicionem em grupo.\n\n2. _${prefix}wprivacygp_ *-all* _→_ Permite que todos os contatos adicionem no grupo, sem nenhuma interferência.\n\n3. _${prefix}wprivacygp_ *-noall* _→_ Ninguém conseguirá adicionar o bot em grupos, até o(a) dono(a) está restrito.\n–\n📍 *Função:* O comando tem a função de alterar a privacidade de todos os usuários adicionar o contato da bot em grupos, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações do número.`
}

exports.errorResponseSimi = () => {
response = ["*ᴇᴜ ɴᴀᴏ sᴇɪ ᴀ ʀᴇsᴘᴏsᴛᴀ, ᴘᴏᴅᴇʀɪᴀ ᴍᴇ ᴇɴsɪɴᴀʀ? 🙇‍♂️*"];
return response[Math.floor(Math.random() * response.length)]
}

exports.GshowGE = (dataResult) => {
return dataResult.resultado.map((info, index) => `${index+1}. *${info.titulo || 'Manchete sem título.'}* - (${info.horarioPostagem || 'Há X horas.'})\n• ${info.trechoManchete || 'Manchete sem descrição.'}`).join('\n–\n');
}

exports.helpNoticesG = (sender, prefix) => {
return `😸 Olá @${sender.split('@')[0]}, seja bem-vindo ao menu de ajuda e tutoriais do comando: *'gamenews'* | *'gamesnews'*\n–\n# O comando possuí 11 argumentações de uso, cada uma tem um filtro de notícia. Lembrando, este comando é somente para notícias de jogos online! Para ver notícias de Time, use: _${prefix}esportenews_.\n–\n*01.* Call of Duty: ${prefix}gamenews -cod\n*02.* Counter-Strike: ${prefix}gamenews -csgo\n*03.* FIFA 2024: ${prefix}gamenews -fifa\n*04.* Fortnite: ${prefix}gamenews -fortnite\n*05.* GameXP: ${prefix}gamenews -gamexp\n*06.* PES 2024: ${prefix}gamenews -pes\n*07.* League of Legends: ${prefix}gamenews -lol\n*08.* Pokemon: ${prefix}gamenews -pokemon\n*09.* Rainbow 6: ${prefix}gamenews -r6\n*10.* Valorant: ${prefix}gamenews -valorant\n*11.* Pokemon TCG: ${prefix}gamenews -tcg`
}

exports.helpNoticesEsporte = (sender, prefix) => {
return `🌟 Olá @${sender.split('@')[0]}, seja bem-vindo ao menu de ajuda e tutoriais do comando: *'esporte_noticias'* | *'esportenews'*\n–\n# O comando possuí 18 argumentações de uso, cada uma tem um filtro de notícia. Lembrando, este comando é somente para notícias de esportes! Para ver notícias de jogos online, use: _${prefix}gamenews_.\n–\n*01.* Todas as categorias agrupadas à um só parâmetro: ${prefix}esportenews -all\n*02.* Futebol: ${prefix}esportenews -futebol\n*03.* Futsal: ${prefix}esportenews -futsal\n*04.* Skate: ${prefix}esportenews -skate\n*05.* Surfe: ${prefix}esportenews -surf\n*06.* Basquete: ${prefix}esportenews -basquete\n*07.* Vôlei: ${prefix}esportenews -volei\n*08.* Tênis: ${prefix}esportenews -tenis\n*09.* Atletismo: ${prefix}esportenews -atletismo\n*10.* Natação: ${prefix}esportenews -natacao\n*11.* Ciclismo: ${prefix}esportenews -ciclismo\n*12.* Boxe: ${prefix}esportenews -boxe\n*13.* Beisebol: ${prefix}esportenews -beisebol\n*14.* Futebol EUA: ${prefix}esportenews -futebol-eua\n*15.* Judô: ${prefix}esportenews -judo\n*16.* Ginástica: ${prefix}esportenews -ginastica\n*17.* Golfe: ${prefix}esportenews -golfe\n*18.* Fórmula 1: ${prefix}esportenews -f1`
}

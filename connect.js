const { default: makeWASocket, useMultiFileAuthState, makeInMemoryStore, makeCacheableSignalKeyStore, PHONENUMBER_MCC } = require('@whiskeysockets/baileys');

const { fs, readline, LoggerB, Boom, axios, util, moment, time, date, getBuffer, banner2, banner3, colors, getGroupAdmins, mess, getRandom, NodeCache, nescessario, setting, extractDDD, extractStateFromNumber, extractStateFromDDD } = require('./exports.js');

const { prefix, CREDENTIALS_USER } = require('./INFO_YUTA/DADOS/INFO_YUTA.json');
const { fundo1, fundo2 } = require("./INFO_YUTA/LOGOS/links_img.json");

function DLT_FL(file) {
    try {
        fs.unlinkSync(file)
    } catch (error) {}
}

const logger = LoggerB.child({});
logger.level = 'silent';

const qrcode = "./DADOS DO YUTA/qr-code";
const usePairingCode = process.argv.includes('não');

if (!usePairingCode && !fs.existsSync(`${qrcode}/creds.json`)) console.log(colors.yellow("- Aviso: Se você não estiver outro aparelho em mãos para realizar a leitura do qr-code, você usar a 2° opção seria ela ( sh start.sh sim ), sem os parenteses e você conectará com código de emparelhamento.\n") + "–");
const useMobile = process.argv.includes('--mobile');

function collectNumbers(inputString) {
    return inputString.replace(/\D/g, '');
}

const originalConsoleInfo = console.info;

console.info = function() {
    const message = util.format(...arguments);
    const forbiddenStrings = ["Closing session: SessionEntry", "Removing old closed session: SessionEntry {", "Another forbidden string", "Closing stale open session for new outgoing prekey bundle"];
    if (forbiddenStrings.some(msg => message.includes(msg))) {
        return;
    }
    originalConsoleInfo.apply(console, arguments);
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const msgRetryCounterCache = new NodeCache();

async function startConnect() {
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(qrcode);
    
    const yuta = makeWASocket({
        logger,
        printQRInTerminal: !usePairingCode,
        mobile: false,
        defaultQueryTimeoutMs: undefined,
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, logger),
        },
        browser: ['Linux', 'Opera', '10.0.22631'],
        msgRetryCounterCache,
        generateHighQualityLinkPreview: true,
        syncFullHistory: false,
        keepAliveIntervalMs: 40000,
        markOnlineOnConnect: true,
    })

    if (usePairingCode && !yuta.authState.creds.registered) {

        const phoneNumber = await question(`${colors.yellow("\n        『 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋 』")}
${colors.cyan("╔══════╌✯╌═⊱×⊰平⊱×⊰═╌✯╌══════╗")}
${colors.cyan("║𖣴⋗")}${colors.magenta(" ᴜsᴇ sᴇᴜ ɴᴜᴍᴇʀᴏ.")}
${colors.cyan("║")}
${colors.cyan("║𖣴⋗")}${colors.magenta(" ᴇxᴇᴍᴘʟᴏ:")}${colors.blue(" +55 91 8166-8473")}
${colors.cyan("║")}
${colors.cyan("║𖣴⋗")}${colors.magenta(" ᴘᴇᴄᴀ ᴏ ᴄᴏᴅɪɢᴏ ᴏᴜ ǫʀᴄᴏᴅᴇ")}
${colors.cyan("║")}
${colors.cyan("║𖣴⋗")}${colors.magenta(" ᴄᴏɴᴇᴄᴛᴀ ɴᴏ WʜᴀᴛsAᴘᴘ")}
${colors.cyan("║")}
${colors.cyan("║𖣴⋗")}${colors.magenta(" ᴇ sᴇᴊᴀ ғᴇʟɪᴢ ᴄᴏᴍ ᴏ ʙᴏᴛ.")}
${colors.cyan("╚══════╌✯╌═⊱×⊰平⊱×⊰═╌✯╌══════╝")}\n`)
        let numerosColetados = collectNumbers(phoneNumber);
        const code = await yuta.requestPairingCode(numerosColetados)
        console.log(`\n${colors.magenta("𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐎 𝐂𝐎𝐃𝐈𝐆𝐎:")} ${colors.cyan(code)}\n–\n${colors.yellow("• BY: NKZIN")}`)
    }

    yuta.ev.process(async (events) => {
        if (events["group-participants.update"]) {
            try {
                var naga2 = events["group-participants.update"];
                if (!fs.existsSync(`./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${naga2.id}.json`)) return
                var jsonGp = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${naga2.id}.json`));

                if (naga2.participants[0].startsWith(yuta.user.id.split(':')[0])) return;

                try {
                    var grpmdt = await yuta.groupMetadata(naga2.id)
                } catch (e) {
                    return
                }

                const isGroup2 = grpmdt.id.endsWith('@g.us');

                try {
                    var GroupMetadata_ = isGroup2 ? await yuta.groupMetadata(naga2.id) : ""
                } catch (e) {
                    return
                }

                const membros_ = isGroup2 ? GroupMetadata_.participants : '';
                const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

                if (naga2.action == 'add') {
                    num = naga2.participants[0];
                    if (nescessario.listanegraG.includes(num)) {
                        yuta.sendMessage(GroupMetadata_.id, {
                            text: mess.blackList(GroupMetadata_, naga2),
                            mentions: naga2.participants
                        });
                        yuta.groupParticipantsUpdate(GroupMetadata_.id, [naga2.participants[0]], 'remove');
                        return;
                    }
                }
                if (naga2.action == 'remove') {
                    num = naga2.participants[0];
                }
                if (naga2.action == 'add' && jsonGp[0].listanegra.includes(naga2.participants[0])) {
                    await yuta.sendMessage(GroupMetadata_.id, {
                        text: mess.blackList(GroupMetadata_, naga2),
                        mentions: naga2.participants
                    });
                    yuta.groupParticipantsUpdate(GroupMetadata_.id, [naga2.participants[0]], 'remove');
                }
                if (jsonGp[0].antifake && naga2.action === 'add' && !naga2.participants[0].startsWith(55)) {
                    if (jsonGp[0].legenda_estrangeiro != "0") {
                        await yuta.sendMessage(GroupMetadata_.id, {
                            text: jsonGp[0].legenda_estrangeiro
                        });
                    }
                    setTimeout(async () => {
                        yuta.groupParticipantsUpdate(GroupMetadata_.id, [naga2.participants[0]], 'remove');
                    }, 1000);
                }
                if (jsonGp[0].ANTI_DDD.active && naga2.action == 'add' && jsonGp[0].ANTI_DDD.listaProibidos.includes(extractDDD(naga2.participants[0].split('@')[0]))) {
                    yuta.sendMessage(GroupMetadata_.id, {
                        text: mess.forbiddenStateFromDDD(naga2.participants[0], extractStateFromDDD, extractDDD),
                        mentions: naga2.participants
                    });
                    setTimeout(async () => {
                        yuta.groupParticipantsUpdate(GroupMetadata_.id, [naga2.participants[0]], 'remove');
                    }, 1000);
                }
                if (!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
                try {
                    var mdata_2 = isGroup2 ? await yuta.groupMetadata(naga2.id) : "";
                } catch (e) {
                    return;
                }
                const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
                const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
                const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
                const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
                const groupDesc = await mdata_2.desc;
                if (jsonGp[0].antifake == true && !naga2.participants[0].startsWith(55)) return;
                if (jsonGp[0].wellcome[0].bemvindo1 == true) {
                
const DLT_FL = (path) => {
    try {
        fs.unlinkSync(path);
        console.log(`Arquivo ${path} deletado com sucesso.`);
    } catch (err) {
        console.error(`Erro ao deletar o arquivo ${path}:`, err);
    }
};

try {
    ppimg = await yuta.profilePictureUrl(`${naga2.participants[0].split('@')[0]}@c.us`);
} catch (e) {
    ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

try {
    ppgp = await yuta.profilePictureUrl(mdata_2.id);
} catch (e) {
    ppgp = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if (naga2.action === 'add') {
    if (isWelcomed) {
        teks = jsonGp[0].wellcome[0].legendabv
            .replace('#hora#', time)
            .replace('#nomedogp#', mdata_2.subject)
            .replace('#numerodele#', '@' + naga2.participants[0].split('@')[0])
            .replace('#numerobot#', yuta.user.id)
            .replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
            .replace('#descrição#', groupDesc)
            .replace('#estado#', extractStateFromNumber(naga2.participants[0].split('@')[0]));
    } else {
        teks = welcome(naga2.participants[0].split('@')[0], mdata_2.subject);
    }

    let buff = await getBuffer(ppimg);

    try {
        const ppimg2 = await yuta.profilePictureUrl(`${naga2.participants[0].split('@')[0]}@c.us`, 'image');
        let buff = await getBuffer(ppimg2);

        await yuta.sendMessage(mdata_2.id, {
            image: buff, // Enviar o buffer diretamente
            mentions: naga2.participants,
            caption: teks
        });
    } catch (e) {
        console.log("Erro ao obter imagem de perfil:", e);

        await yuta.sendMessage(mdata_2.id, {
            image: { url: 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg' },
            mentions: naga2.participants,
            caption: teks
        });
    }
} else if (naga2.action === 'remove') {
    mem = naga2.participants[0];
    try {
        ppimg = await yuta.profilePictureUrl(`${naga2.participants[0].split('@')[0]}@c.us`);
    } catch (e) {
        ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
    }

    if (isByed) {
        teks = jsonGp[0].wellcome[0].legendasaiu
            .replace('#hora#', time)
            .replace('#nomedogp#', mdata_2.subject)
            .replace('#numerodele#', '@' + naga2.participants[0].split('@')[0])
            .replace('#numerobot#', yuta.user.id)
            .replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
            .replace('#descrição#', groupDesc)
            .replace('#estado#', extractStateFromNumber(naga2.participants[0].split('@')[0]));
    } else {
        teks = bye(naga2.participants[0].split('@')[0]);
    }

    let buff = await getBuffer(ppimg);

    try {
        const ppimg2 = await yuta.profilePictureUrl(`${naga2.participants[0].split('@')[0]}@c.us`, 'image');
        let buff = await getBuffer(ppimg2);

        await yuta.sendMessage(mdata_2.id, {
            image: buff, // Enviar o buffer diretamente
            mentions: naga2.participants,
            caption: teks
        });
    } catch (e) {
        console.log("Erro ao obter imagem de perfil:", e);

        await yuta.sendMessage(mdata_2.id, {
            image: { url: 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg' },
            mentions: naga2.participants,
            caption: teks
        });
    }
}


                }

                if (jsonGp[0].wellcome[1].bemvindo2 == true) {
                    if (naga2.action === 'add') {
                        if (isWelcomed2) {
                            teks = jsonGp[0].wellcome[1].legendabv
                                .replace('#hora#', time)
                                .replace('#nomedogp#', mdata_2.subject)
                                .replace('#numerodele#', '@' + naga2.participants[0].split('@')[0])
                                .replace('#numerobot#', yuta.user.id)
                                .replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
                                .replace('#descrição#', groupDesc)
                                .replace('#estado#', extractStateFromNumber(naga2.participants[0].split('@')[0]))
                        } else {
                            teks = welcome2(naga2.participants[0].split('@')[0], mdata_2.subject)
                        }
                        yuta.sendMessage(mdata_2.id, {
                            text: teks,
                            mentions: naga2.participants
                        })
                    } else if (naga2.action === 'remove') {
                        var mem = naga2.participants[0]
                        if (isByed2) {
                            teks = jsonGp[0].wellcome[1].legendasaiu
                                .replace('#hora#', time)
                                .replace('#nomedogp#', mdata_2.subject)
                                .replace('#numerodele#', '@' + naga2.participants[0].split('@')[0])
                                .replace('#numerobot#', yuta.user.id)
                                .replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
                                .replace('#descrição#', groupDesc)
                                .replace('#estado#', extractStateFromNumber(naga2.participants[0].split('@')[0]))
                        } else {
                            teks = bye2(mem.split('@')[0])
                        }
                        yuta.sendMessage(mdata_2.id, {
                            text: teks,
                            mentions: naga2.participants
                        })
                    }
                }

            } catch (e) {
                console.log(e)
            }
        }

        if (events["connection.update"]) {
            const update = events["connection.update"];
            var {
                connection,
                lastDisconnect
            } = update
            const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

            switch (connection) {
                case 'close':
                    if (shouldReconnect) {
                        if (shouldReconnect == 401) {
                            console.log(colors.red(mess.ErrorBaileys_401()));
                        } else if (shouldReconnect == 408) {
                            console.log(colors.yellow(mess.ErrorBaileys_408()));
                        } else if (shouldReconnect == 411) {
                            console.log(colors.yellow(mess.ErrorBaileys_411()));
                        } else if (shouldReconnect == 428) {
                            console.log(colors.yellow(mess.ErrorBaileys_428()));
                        } else if (shouldReconnect == 440) {
                            console.log(colors.gray(mess.ErrorBaileys_440()));
                        } else if (shouldReconnect == 500) {
                            console.log(colors.gray(mess.ErrorBaileys_500()));
                        } else if (shouldReconnect == 503) {
                            console.log(colors.gray("Ocorreu um erro desconhecido! Error: 503."));
                        } else if (shouldReconnect == 515) {
                            console.log(colors.gray(mess.ErrorBaileys_515()));
                        } else {
                            console.log(`${colors.red("[CONNECTION CLOSED]")} Conexão fechada por motivo do erro: ${lastDisconnect?.error}`)
                        }
                        startConnect();
                    }
                    break;

                case 'connecting':
                    console.log(`${colors.white("×")} [${colors.red(date,time)}] - ${colors.yellow(mess.connecting())}`);
                    break;

                case 'open':
                    console.log(banner3.string);
                    console.log(banner2.string);
                    console.log(`${colors.green(mess.open())}`);
                    rl.close();
                    break;

                default:
                    break
            }
        }
        
        if (events["messages.upsert"]) {
            const upsert = events["messages.upsert"];
            const startyuta = require('./yuta.js');
            
            startyuta(upsert, yuta, qrcode).then(() => {}).catch(console.log);
        }
       
        if (events["creds.update"]) {
            await saveCreds();
        }

    })
}

startConnect().catch(error => console.log(colors.red("Ocorreu um erro ao inicializar o bot: " + error)));
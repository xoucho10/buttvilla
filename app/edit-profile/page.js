// alumni searches his name + old whatsapp to verify
const { data } = await supabase.from('alumni').select('*').eq('whatsapp', oldNumber).eq('name', name).single();
if(data) await supabase.from('alumni').update({ whatsapp: newNumber }).eq('id', data.id);
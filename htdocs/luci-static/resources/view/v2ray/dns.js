"use strict";"require form";"require v2ray";return L.view.extend({load:function(){return v2ray.getSections("dns_server")},render:function(e){void 0===e&&(e=[]);var r,o=new form.Map("v2ray","%s - %s".format(_("V2Ray"),_("DNS")),_("Details: %s").format('<a href="https://www.v2ray.com/en/configuration/dns.html#dnsobject" target="_blank">DnsObject</a>')),a=o.section(form.NamedSection,"main_dns","dns");a.anonymous=!0,a.addremove=!1,(r=a.option(form.Flag,"enabled",_("Enabled"))).rmempty=!1,r=a.option(form.Value,"tag",_("Tag")),(r=a.option(form.Value,"client_ip",_("Client IP"),'<a href="https://icanhazip.com" target="_blank">%s</a>'.format(_("Get my public IP address")))).datatype="ipaddr",r=a.option(form.DynamicList,"hosts",_("Hosts"),_("A list of static addresses, format: <code>domain|address</code>. eg: %s").format("google.com|127.0.0.1")),r=a.option(form.MultiValue,"servers",_("DNS Servers"),_("Select DNS servers to use"));for(var t=0,s=e;t<s.length;t++){var n=s[t];r.value(n.value,n.caption)}var i=o.section(form.GridSection,"dns_server",_("DNS server"),_("Add DNS servers here"));return i.anonymous=!0,i.addremove=!0,(r=i.option(form.Value,"alias",_("Alias"),_("Any custom string"))).rmempty=!1,r=i.option(form.Value,"address",_("Address")),(r=i.option(form.Value,"port",_("Port"))).datatype="port",r.placeholder="53",(r=i.option(form.DynamicList,"domains",_("Domains"))).modalonly=!0,o.render()}});
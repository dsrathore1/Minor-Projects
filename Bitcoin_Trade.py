import api_key
import requests
from tkinter import *
from tkinter.ttk import *

from time import strftime

bitroot = Tk()
bitroot.title('Bitcoin Tracking')
bitroot.geometry('650x420')

label = Label(bitroot,text= "Bitcoin Trade", foreground='black', font=('Open sans', 24, 'bold'))
label.pack(pady=20)

label3 = Label(bitroot, foreground='black', font=('Open sans', 15, 'normal'))
label3.pack(pady=30,)

label2 = Label(bitroot, foreground='black', font=('Open sans', 22, 'bold'))
label2.pack(pady=20,anchor='center')




headers = {
    'X-CMC_PRO_API_KEY' : api_key.key,
    'Accepts' : 'application/json'
}

params = {
    'start' : '1',
    'limit' : '5',
    'convert' : 'USD'
}

url ='https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'

json =  requests.get(url, params=params, headers= headers).json()

coins = json['data']

def trade():
    timing = strftime('%H:%M:%S %p')
    label3.config(text=timing)
    label3.after(1000, trade)
    for i in coins :
        if i['symbol'] == 'BTC':
            printing = (i['name'], i['quote']['USD']['price'], i['symbol'])
            label2.config(text=printing)

        label2.after(1000, trade)
        
    # print(i['name'],'\t\t', i['quote']['USD']['price'], i['symbol'])

trade()
mainloop()
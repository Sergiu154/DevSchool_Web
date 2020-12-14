import requests

def seed_index(baseUrl,articles):

	srcs = ["https://i.picsum.photos/id/608/1200/900.jpg?hmac=4L3lIqP3LkdecrcxKL95gVjwKZJUNca9yCaIoz6-KUY",
			"https://i.picsum.photos/id/295/1200/900.jpg?hmac=iKGvGlmnukR7LzynJfJ9Z7HnsVr9ZjDHllo8AGIE7po",
			"https://i.picsum.photos/id/323/1200/900.jpg?hmac=TYBz_ypTHr_a9pp9ZF7nnXROO9WyR-9GCPjy_HK6R9w",
			]
	articleClass = ["","reverseArticle",""]
	divImgClass = ["img_div","img_div","img_div"]
	titles= ["Article 1","Article 2","Article 3"]

	subtitles = ["Subtitle 1","Subtitle 2","Subtitle 3"]

	text = [

	"Fusce feugiat dui sit amet enim rutrum vulputate. In nec dolor id arcu sagittis rhoncus et sit\
                        amet\
                        magna. Phasellus ac purus ut lectus aliquam condimentum a et est. Vestibulum a tempor dolor.\
                        Praesent\
                        nulla arcu, egestas ac laoreet nec, iaculis pretium mi. Donec vitae libero lorem. Cras\
                        tincidunt, felis\
                        ac egestas lobortis, libero tellus mattis leo, vitae dapibus libero ante sit amet ex.\
                        Suspendisse ut\
                        placerat tellus, consectetur hendrerit dui. In ultricies eros ut ante malesuada ultrices. Nullam\
                        ipsum\
                        mauris, egestas non magna sed, blandit venenatis lacus.",


         "Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam\
                        pharetra\
                        erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum\
                        molestie\
                        interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo\
                        lacus\
                        aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget\
                        convallis\
                        nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies\
                        facilisis\
                        magna eleifend aliquam.",

         " Phasellus elit eros, fringilla dignissim ligula id, finibus vulputate elit. Suspendisse purus\
                        elit,\
                        convallis ac sodales in, vehicula eu odio. Maecenas id leo eu urna elementum facilisis id sed\
                        ante.\
                        Morbi sagittis tortor ac ligula molestie hendrerit. Cras at mi semper, euismod lorem nec,\
                        interdum nisl.\
                        In hac habitasse platea dictumst. In fermentum neque id maximus viverra. Nulla sed arcu\
                        malesuada, porta\
                        justo at, hendrerit tellus."
	]

	header = {
		"Accept": 'application/json',
		"Content-Type": 'applicaiton/json'
	}
	for src,artClass,divClass,title,subtitle,txt in list(zip(srcs,articleClass,divImgClass,titles,subtitles,text)):

		payload = {

			"src": src,
			"articleClass": artClass,
			"divClass": divClass,
			"title": title,
			"subtitle": subtitle,
			"text": txt
		}
		
		r = requests.post(baseUrl + articles,json=payload)
		print(r.text)




def seed_destination(baseUrl,dst):

	srcs=[
	"https://i.picsum.photos/id/562/200/200.jpg?hmac=F4ylYRNFPH6rDzYo48_NUieJXXI2yaMl9ElwGeFQHZo",
	"https://i.picsum.photos/id/103/200/200.jpg?hmac=iAYeZbg7h6KXJzEJuemMnhxfHUPDu6OkgQ_TfAMWlRM",
	"https://i.picsum.photos/id/863/200/200.jpg?hmac=b2PqP--PkLWi3zKCrto-MSpLXkrtt4kYpKbUkZa2Yjo",
	"https://i.picsum.photos/id/1054/200/200.jpg?hmac=7qtHUdgOyKxMVpcUELySqbknGm7xI76LbA9CE0uag_o",
	"https://i.picsum.photos/id/984/200/200.jpg?hmac=ffnu-AL0Ppy1NASA-nJXcj_BHBepOjLaPhPjYWDq1T4",
	"https://i.picsum.photos/id/114/200/200.jpg?hmac=quI2SDil5gvhyJiPY4KNxdaMtGBybPSvAS7R02lF1vo"
	]

	divsClass =[
	 "asideText"

	] * 6

	titles = ["Destination "  + str(i) for i in range(1,7)]

	descriptions = [
	"Duis placerat tincidunt convallis. Integer posuere massa ac neque malesuada finibus. Nullam pharetra\
                    erat at diam porttitor varius nec eget odio. Aenean ullamcorper egestas pulvinar. Vestibulum molestie\
                    interdum orci, at semper lacus placerat eget. Morbi blandit lacus nec ante luctus, et commodo lacus\
                    aliquam. Aenean gravida, tortor sit amet tempor dictum, nunc odio pellentesque metus, eget convallis\
                    nisl metus non turpis. In molestie scelerisque accumsan. Cras vestibulum mi elit, ultricies facilisis\
                    magna eleifend aliquam."


	] * 6

	moreInfoSrcs = ["https://crouton.net/" ] * 6


	for src,divClass,title,description,moreInfo in list(zip(srcs,divsClass,titles,descriptions,moreInfoSrcs)):
		payload = {

		"src": src,
		"divClass": divClass,
		"title": title, 
		"description": description,
		"moreInfoSrc": moreInfo
		}
		r = requests.post(baseUrl + dst,json=payload)
		print(r.text)




def main():

	baseUrl = 'https://devschool-2020.firebaseio.com/talmacel-sergiu/'
	articles  = 'articles.json'
	destinations = 'destinations.json'

	seed_index(baseUrl,articles)
	# seed_destination(baseUrl,destinations)


main()
	

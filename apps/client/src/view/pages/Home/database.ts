const originalTasks = [
	{
		id: "34c53c3f-1b13-4f8e-9c0a-e6f293009d73",
		title: "Ethyl Alcohol",
		description:
			"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
		end_date: "2024-05-26T11:40:21Z",
		priority: "P1",
		tags: "quam suspendisse potenti",
		category: "category1",
		checked: true,
	},
	{
		id: "2eee4ac1-3ad3-442e-bd5d-3c9fe6fa237d",
		title: "Fluconazole",
		description:
			"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
		end_date: "2024-05-27T11:56:41Z",
		priority: "P4",
		tags: "in faucibus orci",
		category: "category1",
		checked: false,
	},
	{
		id: "c793fa26-f05b-4ed7-bc5b-e745cc5e37e7",
		title: "glycerin, hypromellose, polyethylene glycol 400",
		description:
			"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
		end_date: "2024-07-03T05:51:49Z",
		priority: "P1",
		tags: "risus",
		category: "category1",
		checked: false,
	},
	{
		id: "73eb634d-e93c-4e7b-b344-0fa38d64077d",
		title: "CLINDAMYCIN",
		description:
			"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
		end_date: "2024-04-14T09:50:52Z",
		priority: "P2",
		tags: "volutpat eleifend donec",
		category: "category4",
		checked: true,
	},
	{
		id: "ffac3608-674f-4e2d-9c4d-d9280cdd1610",
		title: "histamine phosphate",
		description:
			"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
		end_date: "2024-05-21T05:07:19Z",
		priority: "P4",
		tags: "at turpis a pede posuere",
		category: "category4",
		checked: false,
	},
	{
		id: "061cbccd-b0c6-4d17-b4a0-c22df6f7aa21",
		title: "clindamycin phosphate",
		description:
			"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
		end_date: "2024-06-23T04:23:07Z",
		priority: "P1",
		tags: "dapibus duis at velit eu",
		category: "category3",
		checked: true,
	},
	{
		id: "eca35bc9-e4d2-4414-8fbd-d6cd2bb2aeb9",
		title: "Aspirin",
		description:
			"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
		end_date: "2024-05-26T13:13:56Z",
		priority: "P4",
		tags: "ultrices",
		category: "category3",
		checked: false,
	},

	{
		id: "ce8ed15e-b15b-4e84-86f8-62f22a982986",
		title: "Glyburide",
		description:
			"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
		end_date: "2024-09-09T18:41:02Z",
		priority: "P1",
		tags: "orci nullam molestie",
		category: "category1",
		checked: true,
	},

	{
		id: "01640329-1731-490e-8834-8884a68ed208",
		title: "Risperidone",
		description:
			"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
		end_date: "2024-09-07T01:20:37Z",
		priority: "P4",
		tags: "id turpis integer aliquet",
		category: "category1",
		checked: true,
	},
	{
		id: "c45c2704-c1ba-4c99-97f1-6053eea153c4",
		title: "Neomycin, Polymyxin B, Pramoxine HCl",
		description:
			"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
		end_date: "2024-05-08T05:43:58Z",
		priority: "P1",
		tags: "dui vel nisl duis",
		category: "category1",
		checked: false,
	},
	{
		id: "e2d15e3f-854a-415f-845b-3f02a800cd8a",
		title: "oxycodone hydrochloride",
		description:
			"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
		end_date: "2024-06-01T11:12:26Z",
		priority: "P3",
		tags: "tellus nulla ut",
		category: "category3",
		checked: false,
	},
	{
		id: "9b309602-fc77-4ece-9804-a4a617ca63e1",
		title: "Pyrithione Zinc",
		description:
			"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
		end_date: "2024-05-24T21:10:54Z",
		priority: "P3",
		tags: "aliquet massa",
		category: "category2",
		checked: true,
	},
	{
		id: "ae87f1d7-04f6-4bdb-b4f0-4df1b58ce983",
		title: "Venlafaxine",
		description:
			"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
		end_date: "2024-07-31T20:26:35Z",
		priority: "P3",
		tags: "duis mattis egestas metus aenean",
		category: "category3",
		checked: false,
	},
	{
		id: "ca7aa071-b344-4eb5-b7e9-4d5e457ffcec",
		title: "Levofloxacin",
		description:
			"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
		end_date: "2024-06-23T01:33:54Z",
		priority: "P3",
		tags: "libero rutrum ac lobortis vel",
		category: "category1",
		checked: true,
	},
	{
		id: "447a6516-b6d5-43ce-803f-8e55b75012c7",
		title: "water",
		description:
			"Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
		end_date: "2024-07-29T17:20:06Z",
		priority: "P1",
		tags: "malesuada in imperdiet",
		category: "category1",
		checked: true,
	},
	{
		id: "5563e29e-cb29-4328-bd0d-dc05ee6ca167",
		title:
			"PINE NEEDLE OIL (PINUS SYLVESTRIS) SAMBUCUS NIGRA FLOWER CALENDULA OFFICINALIS FLOWER THUJA OCCIDENTALIS LEAFY TWIG",
		description:
			"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
		end_date: "2024-06-22T21:52:48Z",
		priority: "P4",
		tags: "ut suscipit a feugiat et",
		category: "category4",
		checked: false,
	},
	{
		id: "d5d28a12-2d20-416b-a621-beaa6b6bb8cc",
		title: "ibuprofen",
		description:
			"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
		end_date: "2024-04-19T09:34:26Z",
		priority: "P1",
		tags: "faucibus orci luctus",
		category: "category4",
		checked: true,
	},
	{
		id: "7ebc5c21-f552-4241-a351-911afd3874d3",
		title: "OCTINOXATE, OCTISALATE, TITANIUM DIOXIDE",
		description:
			"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
		end_date: "2024-08-26T18:19:10Z",
		priority: "P3",
		tags: "ut",
		category: "category4",
		checked: true,
	},
	{
		id: "877e439d-b74d-4af7-a0f9-868adfdab513",
		title: "SODIUM FLUORIDE",
		description:
			"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		end_date: "2024-05-15T10:39:59Z",
		priority: "P4",
		tags: "primis",
		category: "category4",
		checked: false,
	},
	{
		id: "c2764b34-66d9-4fb4-8ec8-917dbb4d1507",
		title:
			"Carbolicum Acidum, Fagopyrum Exculentum, Hydrastis Canadensis, Hydrocotyle Asiatica, Juglans Regia, Vinca Minor",
		description:
			"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
		end_date: "2024-08-25T02:16:10Z",
		priority: "P4",
		tags: "tincidunt",
		category: "category3",
		checked: false,
	},
	{
		id: "5188c731-1ac7-41bf-af73-a4e2f90c7778",
		title: "levalbuterol hydrochloride",
		description:
			"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
		end_date: "2024-05-08T15:16:44Z",
		priority: "P3",
		tags: "elit proin interdum mauris",
		category: "category4",
		checked: true,
	},
	{
		id: "fba3c0f8-7d5e-4325-90e9-6379d1234bf0",
		title:
			"Potassium Citrate Monohydrate, Sodium Citrate Dihydrate, Citric Acid Monohydrate",
		description:
			"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
		end_date: "2024-04-18T12:35:45Z",
		priority: "P1",
		tags: "aliquet",
		category: "category3",
		checked: true,
	},
	{
		id: "7e214129-065b-4cb8-9f91-1066f58d5b32",
		title: "Aluminum hydroxide, Magnesium hydroxide, Simethicone",
		description:
			"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
		end_date: "2024-05-28T04:33:54Z",
		priority: "P3",
		tags: "facilisi cras non velit",
		category: "category1",
		checked: true,
	},
	{
		id: "ab0d9bd7-8c03-40f4-b33e-511219b5a862",
		title: "Triclosan",
		description:
			"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
		end_date: "2024-08-19T07:20:29Z",
		priority: "P1",
		tags: "at turpis donec",
		category: "category3",
		checked: true,
	},
	{
		id: "170ddd93-02c7-45c9-8d7e-90da5aba602a",
		title: "Tacrolimus",
		description:
			"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
		end_date: "2024-09-02T11:06:26Z",
		priority: "P3",
		tags: "non lectus aliquam sit amet",
		category: "category3",
		checked: true,
	},
	{
		id: "ddb74962-f662-403e-be2d-dc3ae09dac17",
		title: "Cefdinir",
		description:
			"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		end_date: "2024-07-08T07:36:58Z",
		priority: "P1",
		tags: "nulla",
		category: "category1",
		checked: true,
	},
	{
		id: "46c97f66-3a20-4fbe-8cb5-4d6056090c2b",
		title: "MENTHOL",
		description:
			"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
		end_date: "2024-06-12T17:26:48Z",
		priority: "P2",
		tags: "pulvinar",
		category: "category4",
		checked: false,
	},
	{
		id: "40ba176a-f381-46b8-9013-f6f433124b77",
		title: "Fosinopril Sodium",
		description:
			"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
		end_date: "2024-05-21T12:35:28Z",
		priority: "P4",
		tags: "ipsum primis in faucibus orci",
		category: "category4",
		checked: true,
	},
	{
		id: "da79c2ad-4ddf-4755-be68-5c2914c44755",
		title: "Divalproex Sodium",
		description:
			"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
		end_date: "2024-08-23T01:10:27Z",
		priority: "P3",
		tags: "morbi quis tortor",
		category: "category3",
		checked: true,
	},
	{
		id: "dfaffa26-2b6a-42c9-8ab2-0495505d1f5b",
		title: "Viscum Mali e pl. tota 5%",
		description:
			"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
		end_date: "2024-07-23T18:55:31Z",
		priority: "P1",
		tags: "morbi vestibulum velit id",
		category: "category3",
		checked: true,
	},
	{
		id: "e0995e78-5c27-42f9-8bdd-9a502b2dc258",
		title: "STANNOUS FLUORIDE",
		description:
			"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
		end_date: "2024-05-07T23:23:55Z",
		priority: "P3",
		tags: "odio curabitur convallis duis",
		category: "category1",
		checked: true,
	},
	{
		id: "dd5d700f-5683-4961-90fd-58eb70b42115",
		title: "rifampin",
		description:
			"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
		end_date: "2024-09-03T04:31:48Z",
		priority: "P1",
		tags: "luctus et ultrices posuere",
		category: "category2",
		checked: true,
	},
	{
		id: "e743ea3e-40a2-4fe0-a040-96b202c8089e",
		title: "Phentermine Hydrochloride",
		description:
			"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
		end_date: "2024-06-23T10:27:41Z",
		priority: "P2",
		tags: "luctus",
		category: "category3",
		checked: true,
	},
	{
		id: "0150ec46-2538-4845-a571-384d81d47dcd",
		title: "Hydrocodone Bitartrate and Acetaminophen",
		description:
			"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
		end_date: "2024-06-25T02:16:35Z",
		priority: "P4",
		tags: "risus auctor",
		category: "category3",
		checked: false,
	},
];

export const tasks = originalTasks.map((task) => ({
	...task,
	date: task.end_date,
	tags: task.tags.split(" "),
}));

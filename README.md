# plutonium
Backend cohort July 2022 - Nov 2022

Assigment : https://docs.google.com/document/d/1J9bLPYBb_wJ3McS5VnHhUgwFwDEg6zzOiGjxHKjjcrI/edit?usp=sharing



    let book = req.body
    let author1 = book.author
    let publisher1 = book.publisher
    const isValidObjectId = function (objectId) {
        return mongoose.Types.ObjectId.isValid(objectId);
      };

    // console.log(author1)
    let idfromauthor = await newAuthorModel.find({ _id: { $eq : author1 }})
    // console.log(idfromauthor)
    let idfromPublisher = await newPublisherModel.find({ _id:  { $eq :publisher1 }}).select({_id : 1}).valueOf()
    let a= idfromPublisher.publisher.valueOf()
    console.log(a)
    // console.log(publisher1)
    // console.log(idfromauthor)
    if (author1 == idfromauthor &&  publisher1 == idfromPublisher) {
  
        let bookCreated = await newBookModel.create(book)
        res.send({ data: bookCreated })
    }
    else{
       return  res.send("not valid author or publisher")
    }
}
    // let data = req.body
    // let author_id = data.author
    // let publisher_id = data.publisher
    // if (!author_id) {
    //     return res.send({ msg: "author id required" })
    // }
    // if (!isValidObjectId(author_id)) {
    //     return res.send({ status: false, message: "author_id is not valid" })

    // }
    // if (!isValidObjectId(publisher_id)) {
    //     return res.send({ status: false, message: "publisher_id is not valid" })

    // }

    // let finalData = await newBookModel.create(data)
    // res.send({ msg: finalData })


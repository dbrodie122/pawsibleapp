CREATE TABLE Pet 
(
  PetId int not null primary key identity(1,1)
, PetName varchar (100) not null 
, Breed varchar (100) not null default 'Unknown'
, OwnerName varchar (100) not null
, Notes varchar (3000) null
)

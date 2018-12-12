using System;
using System.Collections.Generic;

namespace pawsible_api.Models
{
    public partial class Pet
    {
        public int PetId { get; set; }
        public string PetName { get; set; }
        public string Breed { get; set; }
        public string OwnerName { get; set; }
        public string Notes { get; set; }
    }
}

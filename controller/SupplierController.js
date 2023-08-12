const Supplier = require('../model/Supplier');

// Créer un nouveau fournisseur
async function createSupplier(req, res) {
  const { name, contactName, contactEmail, contactPhone } = req.body;

  try {
    const newSupplier = await Supplier.create({
      name,
      contactName,
      contactEmail,
      contactPhone
    });

    res.status(201).json(newSupplier);
  } catch (err) {
    console.error('Erreur lors de la création du fournisseur :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la création du fournisseur.' });
  }
}

// Obtenir tous les fournisseurs
async function getAllSuppliers(req, res) {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (err) {
    console.error('Erreur lors de la récupération des fournisseurs :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des fournisseurs.' });
  }
}

// Obtenir un fournisseur par son ID
async function getSupplierById(req, res) {
  const supplierId = req.params.id;

  try {
    const supplier = await Supplier.findById(supplierId);
    if (!supplier) {
      return res.status(404).json({ error: 'Fournisseur non trouvé.' });
    }
    res.json(supplier);
  } catch (err) {
    console.error('Erreur lors de la récupération du fournisseur :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération du fournisseur.' });
  }
}

// Mettre à jour un fournisseur par son ID
async function updateSupplierById(req, res) {
  const supplierId = req.params.id;
  const updatedSupplierData = req.body;

  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(supplierId, updatedSupplierData, { new: true });
    if (!updatedSupplier) {
      return res.status(404).json({ error: 'Fournisseur non trouvé.' });
    }
    res.json(updatedSupplier);
  } catch (err) {
    console.error('Erreur lors de la mise à jour du fournisseur :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la mise à jour du fournisseur.' });
  }
}

// Supprimer un fournisseur par son ID
async function deleteSupplierById(req, res) {
  const supplierId = req.params.id;

  try {
    const deletedSupplier = await Supplier.findByIdAndDelete(supplierId);
    if (!deletedSupplier) {
      return res.status(404).json({ error: 'Fournisseur non trouvé.' });
    }
    res.json({ message: 'Fournisseur supprimé avec succès.' });
  } catch (err) {
    console.error('Erreur lors de la suppression du fournisseur :', err);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression du fournisseur.' });
  }
}

module.exports = {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplierById,
  deleteSupplierById
};
